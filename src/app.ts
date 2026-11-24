import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import config from "./config";
import { initDB, pool } from "./db";
import { userRoute } from "./modules/users/user.route";
import { profileRoute } from "./modules/profile/profile.route";
const app: Application = express();
// const port = 5000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true })); // extended for nexted data

app.use("/api/v1/users", userRoute)
app.use("/api/v1/profile", profileRoute)

app.get("/", (req: Request, res: Response) => {
  // console.log(req);
  // res.send('Hello World!');
  res.status(200).json({
    success: true,
    message: "This is root route",
    author: "TAWSiF",
  });
});


export default app