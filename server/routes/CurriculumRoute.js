import { Router } from 'express';
import IndexController from '../controller/IndexController';
import uploadDownload from '../middleware/uploadDownload';
import UploadDownloadHelper from '../helpers/UploadDownloadHelper';

const router = Router();


router.get('/', IndexController.CurriculumController.findAll);
router.post(
  '/',
  uploadDownload.uploadFiles,
  IndexController.CurriculumController.createCurr
);
router.get('/:id', IndexController.CurriculumController.findOne);
router.put(
  '/:id',
  UploadDownloadHelper.uploadSingleFile,
  IndexController.CurriculumController.update
);
router.get('/images/:filename', uploadDownload.show_curr_logo);

export default router;
