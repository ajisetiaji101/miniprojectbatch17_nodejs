import { Router } from "express";
import IndexController from "../controller/IndexController";
<<<<<<< HEAD
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.post("/", IndexController.JobController.create);
router.get("/", IndexController.JobController.list);
router.put(
  "/:id",
  UploadDownloadHelper.uploadMultipleFile,
  IndexController.JobController.update
);
router.get("/:id", IndexController.JobController.findOne);
=======
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
router.get('/images/:filename', uploadDownload.show_curr_logo);

>>>>>>> 76742fdb7db8220a4f670e8131712c3795d99ebf

export default router;
