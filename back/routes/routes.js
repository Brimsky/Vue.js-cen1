import  express  from "express";
import { getdata, getdizozols } from "../models/pricedata.js";

const Router = express.Router();

//get all prices
Router.get("/charts",getdata);

//get one price from dealer
Router.get("/product/:id", getdizozols);


Router.post("/product/:id", getdizozols);
//export default router
export default Router;