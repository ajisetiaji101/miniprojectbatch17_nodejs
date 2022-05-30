import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router()


router.get('/candidat',IndexController.DasboardController.candidat)
router.get('/training',IndexController.DasboardController.training)
router.get('/boarding',IndexController.DasboardController.boarding)
router.get('/idle',IndexController.DasboardController.idle)
router.get('/month',IndexController.DasboardController.month)
router.get('/bootcamp',IndexController.DasboardController.bootcamp)
router.get('/versus',IndexController.DasboardController.versus)
router.get('/pendidikan',IndexController.DasboardController.pendidikan)
router.get('/universitas',IndexController.DasboardController.universitas)
router.get('/jurusan',IndexController.DasboardController.jurusan)



export default router