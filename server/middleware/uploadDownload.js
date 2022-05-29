import formidable from "formidable";
import fs from 'fs'

const uploadDir = process.cwd() + '/storages/'

const uploadFiles = async (req,res,next) =>{
    const options = {
        keepExtensions : true,
        uploadDir : uploadDir,
        maxFileSize : 5 * 1024 * 1024
    }
    const form = formidable(options);
    let files = []
    let fields = []

    form.onPart = function (part) {
        if (!part.originalFilename || part.originalFilename.match(/\.(jpg|jpeg|png|pdf|doc|docx|xls)$/i)) {
            this._handlePart(part)
        }
        else {
            return res.status(404).send('File type is not supported')
        }
    }

    form.parse(req)
        .on('field',(fieldName, value)=>{
            fields.push({fieldName, value})
        })
        .on('file',(fieldName, file)=>{
            files.push({fieldName, file})
            //files = {...{fieldName,file}}
        })
        .once('end',()=>{
            console.log('upload done');
            req.fileAttrb = ({
                files : files,
                fields : fields
            })
            next()
        })
}

const show_curr_logo = async (req,res) =>{
    const filename = req.params.filename
    const url = `${process.cwd()}/${process.env.UPLOAD_DIR}/${filename}`
    fs.createReadStream(url)
        .on('error',()=> responseNotFound(req,res))
        .pipe(res)
}


function responseNotFound(req,res) {
    res.writeHead(404,{"Content-Type" : "text/plain"})
    res.end("Not Found")
}
export default {
    uploadFiles,
    show_curr_logo
}