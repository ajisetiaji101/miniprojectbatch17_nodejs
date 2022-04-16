import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router()

router.get("/",IndexController.BatchController.findAll);

export default router