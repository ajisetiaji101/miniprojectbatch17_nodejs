import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router()

router.get('/',IndexController.CurriculumReviewsController.findAll)
router.get('/:id',IndexController.CurriculumReviewsController.findOne)

export default router