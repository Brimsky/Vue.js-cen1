import express from "express";
import { Getdata, getdizozols } from "../models/pricedata.js";

const Router = express.Router();

// get all prices
Router.get("/charts", (req, res) => {
  Getdata((err, results) => {
    if (err) {
      console.log('Error getting all prices:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

// get one price from dealer
Router.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  getdizozols(productId, (err, result) => {
    if (err) {
      console.log('Error getting product price:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

// export default router
export default Router;
