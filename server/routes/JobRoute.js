import {Router} from "express";
import IndexController from "../controller/IndexController";

const router= Router()

router.post('/',IndexController.JobController.create)
router.get('/',IndexController.JobController.list)
router.put('/:id', IndexController.JobController.update)

export default router