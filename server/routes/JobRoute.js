import {Router} from "express";
import IndexController from "../controller/IndexController";
import uploadDownload from '../middleware/uploadDownload';
import UploadDownloadHelper from '../helpers/UploadDownloadHelper';
const router= Router()

router.post(
    '/',
    uploadDownload.uploadFiles,
    IndexController.JobController.create
  );
router.get('/',IndexController.JobController.list)
router.put('/:id', IndexController.JobController.update)

export default router