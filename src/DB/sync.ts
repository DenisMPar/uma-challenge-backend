import "../models";
import { sequelizeConection } from "./connect";
sequelizeConection.sync({ force: true }).then((res) => {
  console.log("Database synced", res);
});
