import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router()

router.get('/', IndexController.JobsController.findAll)
router.put('/:id', IndexController.JobsController.update)


export default router