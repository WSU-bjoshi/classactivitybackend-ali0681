import { Router } from "express";
import {listTodos, createTodos, toggleTodos} from "../controllers/todo.controllers.js"

const router = Router();

router.get("/", listTodos);
router.post("/", createTodos);
router.patch("/:id/toggle", toggleTodos);

export default router;