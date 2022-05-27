import {Router} from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from '../helpers/UploadDownloadHelper';
const router= Router()

router.post(
    '/',
    UploadDownloadHelper.uploadSingleFile,
    IndexController.JobController.create
  );
router.get('/',IndexController.JobController.list)
router.put('/:id', IndexController.JobController.update)
router.delete("/:id", IndexController.JobController.remove);
router.get("/:id", IndexController.JobController.findOne);

router.get("/images/:filename", UploadDownloadHelper.showProductImage);


export default router