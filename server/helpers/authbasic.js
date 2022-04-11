const passport = require('passport')
const Strategy = require('passport-local').Strategy
const expressSession = require('express-session')

const sessionSecret = process.env.SESSION_SECRET || 'admin'
const adminPassword = process.env.ADMIN_PASSWORD || 'secret'


passport.use(adminStrategy())

passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((user, cb) => cb(null, user))

const authenticate = passport.authenticate('local')


 module.exports = {
    setMiddleware,
    authenticate,
    login,
    ensureAdmin
} 



function setMiddleware(app) {
    app.use(session())
    app.use(passport.initialize())
    app.use(passport.session())
}
function login(req, res, next) {
    res.json({ success: true })
}

function ensureAdmin(req, res, next) {
    const isAdmin = req.user && req.user.username === 'admin'
    if (isAdmin) return next()
    const err = new Error('Unauthorized')
    err.statusCode = 401
    next(err)
}

function adminStrategy() {
    return new Strategy(function (username, password, cb) {
        const isAdmin = username === 'admin' && password === adminPassword
        if (isAdmin) return cb(null, { username: 'admin' })
        cb(null, false)
    })
}
function session() {
    return expressSession({
        secret: sessionSecret,
        resave: false,
        saveUninitialized: false
    })
} 