import  express  from "express";
import { getallpricedata, getdizozols } from "../models/pricedata.js";

const Router = express.Router();

//get all prices
Router.get("/charts",getallpricedata);

//get one price from dealer
Router.get("/product/:id", getdizozols);

//export default router
export default Router;