import express from "express";
import {getList,createList,updateList,deleteList} from "../controllers/controllers.js";
const router = express.Router();

router.get("/", getList);
router.post("/", createList);
router.patch("/:id",updateList);
router.delete("/:id",deleteList);

export default router;