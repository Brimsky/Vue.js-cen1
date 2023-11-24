import { Express } from "express";
import cors from "cors";
import Router from "./routes/routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use(Router);

const port = 3991;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});