import { Comment } from "./comment";
import { NasaImage } from "./image";

NasaImage.hasMany(Comment);
Comment.belongsTo(NasaImage);
export { NasaImage, Comment };
