import { Comment, NasaImage } from "../models";
import { v4 as uuid } from "uuid";
import { ImageController } from "./image";
export class CommentsController {
  private imageController = new ImageController();
  createComment = async (commentText: string, imageDate: string) => {
    const nasaImage = await this.imageController.findOrCreate(imageDate);
    const newComment = await Comment.create({
      id: uuid(),
      text: commentText,
      NasaImageId: nasaImage.id,
    });
    if (newComment) {
      return newComment;
    } else {
      throw "error al crear el user";
    }
  };
  getImageComments = async (imageDate: string) => {
    const nasaImage = await this.imageController.findImage(imageDate);
    if (!nasaImage) {
      throw new Error("No se encontro la imagen");
    }
    const comments = await Comment.findAll({
      where: {
        NasaImageId: nasaImage?.id,
      },
    });

    if (comments) {
      return comments;
    } else {
      throw new Error("error al obtener los comments");
    }
  };
}
