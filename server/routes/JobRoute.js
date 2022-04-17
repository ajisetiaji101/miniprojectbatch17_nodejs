import {Router} from "express";
import IndexController from "../controller/IndexController";

const router= Router()

router.post('/',IndexController.JobController.create)
router.get('/',IndexController.JobController.list)

export default router