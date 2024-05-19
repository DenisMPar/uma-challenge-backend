import { Model, DataTypes, CreationOptional } from "sequelize";
import { sequelizeConection } from "../DB/connect";
import { UUID } from "crypto";
export class Comment extends Model {
  declare id: CreationOptional<UUID>;
  declare text: string;
}
Comment.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    text: DataTypes.STRING,
  },
  { sequelize: sequelizeConection, modelName: "Comment" }
);
