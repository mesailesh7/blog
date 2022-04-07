import express from "express";

<<<<<<< HEAD
import { createPost, getPosts,updatePost } from "../controllers/posts.js";
=======
import { createPost, getPosts, updatePost } from "../controllers/posts.js";
>>>>>>> 505c5e53eac947253389853722ee0269a30cffa3

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
<<<<<<< HEAD
router.patch('/:id',updatePost)
=======
router.patch("/:id", updatePost);
>>>>>>> 505c5e53eac947253389853722ee0269a30cffa3

export default router;
