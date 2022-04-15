import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router()

router.get('/',IndexController.CurriculumController.findAll)
router.post('/',IndexController.CurriculumController.createCurr)
router.put('/:id',IndexController.CurriculumController.updateCurr)
router.delete('/:id',IndexController.CurriculumController.removeCurr)


export default router