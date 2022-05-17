import {Router} from "express";
import IndexController from "../controller/IndexController";

const router= Router()

router.put('/:id', IndexController.JobController.update)
router.get('/:id', IndexController.JobController.findOne)
router.post('/',IndexController.JobController.create)
router.get('/',IndexController.JobController.list)

export default router