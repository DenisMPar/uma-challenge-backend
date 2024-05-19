import express from "express";
import { CommentsController } from "../controllers/comments";
import { CommentValidate } from "../middleware/schema/comments";
import { ImageValidate } from "../middleware/schema/image";

const router = express.Router();
const commentsController = new CommentsController();

router.get("/", (req, res) => {
  res.json({
    message: "Hello from the API!",
  });
});
router.get(
  "/comments/:imageDate",
  ImageValidate.getImageComments,
  async (req, res) => {
    try {
      const comments = await commentsController.getImageComments(
        req.params.imageDate
      );
      res.json({ comments });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
);
router.post(
  "/comments/:imageDate",
  CommentValidate.createComment,
  async (req, res) => {
    try {
      const comment = await commentsController.createComment(
        req.body.text,
        req.params.imageDate
      );
      res.json({ comment });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
);

export default router;
