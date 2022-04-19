import { Router } from "express";
import IndexController from "../controller/IndexController";


const router = Router()

router.get('/',IndexController.CurriculumController.findAll)


export default router