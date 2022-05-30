import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router()

router.get('/',IndexController.AddPlacementController.findAll)
router.post('/',IndexController.AddPlacementController.create,IndexController.AddPlacementController.createtpl)
router.delete('/:id',IndexController.AddPlacementController.remove)
router.get('/batch/',IndexController.AddPlacementController.search)
router.get('/client/',IndexController.AddPlacementController.cari)


export default router