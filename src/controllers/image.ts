import { NasaImage } from "../models";
import { v4 as uuid } from "uuid";
export class ImageController {
  findOrCreate = async (imageDate: string) => {
    const [nasaImage, created] = await NasaImage.findOrCreate({
      where: {
        imageDate,
      },
      defaults: { id: uuid(), imageDate: imageDate },
    });

    if (nasaImage) {
      return nasaImage;
    } else {
      throw "error al crear o encontrar la imagen";
    }
  };
  findImage = async (imageDate: string) => {
    const nasaImage = await NasaImage.findOne({
      where: {
        imageDate,
      },
    });
    if (!nasaImage) {
      throw new Error("No se encontro la imagen");
    }
    return nasaImage;
  };
}
