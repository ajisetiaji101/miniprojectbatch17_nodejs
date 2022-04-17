import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router()

router.get('/',IndexController.CurriculumReviewsController.findAll)
router.post('/',IndexController.CurriculumReviewsController.create)
router.put('/:id',IndexController.CurriculumReviewsController.update)
router.delete('/:id',IndexController.CurriculumReviewsController.remove)

export default router