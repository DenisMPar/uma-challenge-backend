import { Model, DataTypes, CreationOptional } from "sequelize";
import { sequelizeConection } from "../DB/connect";
import { UUID } from "crypto";
export class NasaImage extends Model {
  declare id: CreationOptional<UUID>;
  declare imageDate: string;
}
NasaImage.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    imageDate: DataTypes.STRING,
  },
  { sequelize: sequelizeConection, modelName: "NasaImage" }
);
