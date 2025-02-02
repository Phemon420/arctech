import {Router} from "express";
import resource from "../controllers/controller.js";

const router=Router();

router.get('/data',resource.resource_get_all);
// router.get();

export default router;