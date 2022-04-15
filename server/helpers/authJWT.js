const jwt = require('jsonwebtoken')
const passport = require('passport')
const Strategy = require('passport-local').Strategy

import bcrypt from 'bcrypt';

const jwtSecret = process.env.JWT_SECRET || 'myjwt'
const adminPassword = process.env.ADMIN_PASSWORD || 'secret'
const jwtOpts = { algorithm: 'HS256', expiresIn: '30d' }
import models from '../models/init-models'

//passport.use(adminStrategy())

passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async function (email, password, cb) {
        try {
            const result = await models.users.findOne({
              include:[{include:[{model:models.roles}], model:models.user_roles}],  where: { user_email: email }
            });
            
            const { user_name, user_id, user_password, user_email,user_roles:[{role:{role_name}}]} = result.dataValues;
            const compare = await bcrypt.compare(password, user_password);

            if (compare) return cb(null, { username: user_name, userId: user_id, email: user_email, userRoles: role_name})



        } catch (error) {
            return cb(null, error.message)
        }

        cb(null, false)
    }
))

const authenticate = passport.authenticate('local', { session: false })

module.exports = {
    authenticate,
    login: login,
    ensureAdmin: ensureAdmin,
    ensureSeller: ensureSeller,
    refreshToken : refreshToken
}



async function login(req, res, next) {
    const token = await sign({ username: req.user.username, roleType: req.user.userRoles });
    const { userId, username, email, userRoles } = req.user;
    res.cookie('jwt', token, { httpOnly: true })

    res.json({ profile: { userId, username, email, userRoles }, success: true, token: token })
}


async function sign(payload) {
    const token = await jwt.sign(payload, jwtSecret, jwtOpts)
    return token
}

async function ensureSeller(req, res, next) {
    const jwtString = req.headers.authorization || req.cookies.jwt
    const payload = await verify(jwtString)
    if (payload.username) {
        req.user = payload;
        if (req.user.roleType === 'Seller') req.isSeller = true;
        return next();
    }

    const err = new Error('Unauthorized');
    err.statusCode = 401;
    next(err);
}

async function ensureAdmin(req, res, next) {
    const jwtString = req.headers.authorization || req.cookies.jwt
    const payload = await verify(jwtString)
    if (payload.username === 'admin') return next()
    const err = new Error('Unauthorized')
    err.statusCode = 401
    next(err)
}

async function verify(jwtString = '') {
    jwtString = jwtString.replace(/^Bearer /i, '')
    try {
        const payload = await jwt.verify(jwtString, jwtSecret)
        return payload
    } catch (err) {
        err.statusCode = 401
        throw err
    }
}

async function refreshToken(req, res) {
    const { refreshToken: requestToken } = req.body;

    if (requestToken == null) {
        return res.status(403).json({ message: "Refresh Token is required!" });
    }

    try {
        const result = await models.tokens.findOne({
            where: { token_id: refreshToken }
        });

        if (!refreshToken) {
            res.status(403).json({ message: "Refresh token is not in database!" });
            return;
        }

        if (result.token_expire_date.getTime() < new Date().getTime()) {
            res.status(403).json({
                message: "Refresh token was expired. Please make a new signin request",
            });
            return;
        }

        let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: config.jwtExpiration,
          });

        return res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: refreshToken.token,
        });

    } catch (error) {
        return res.status(500).send({ message: error });
    }


}

// function adminStrategy() {

//     return new Strategy(async function (username, password, cb) {
//         try {
//             const result = await models.users.findOne({
//                 where: { user_email: username }
//             });

//             const { user_name, user_id, user_password, user_email, user_role_type } = result.dataValues;
//             const compare = await bcrypt.compare(password, user_password);

//             if (compare) return cb(null, { username: user_name, userId: user_id, email: user_email, roleType: user_role_type })
//         } catch (error) {
//             //console.log(error);
//             return cb(null, error)
//         }

//         cb(null, false)
//     })
// }