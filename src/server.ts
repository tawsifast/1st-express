import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import {Pool} from "pg"
const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true })); // extended for nexted data

const pool = new Pool({
  connectionString : "postgresql://neondb_owner:npg_hbMDT8apN5jH@ep-jolly-smoke-a13jon01.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})
console.log("Pool",pool);

app.get("/", (req: Request, res: Response) => {
  // console.log(req);
  // res.send('Hello World!');
  res.status(200).json({
    success: true,
    message: "This is root route",
    author: "TAWSiF",
  });
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  const { name, age, password } = req.body;
  console.log(password);
  res.status(200).json({
    success: true,
    message: "This is a test api",
    data: { name, age },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
