import exp from "constants";
import database from '../config/database.js';
export const craetePriceinfo = (req,res) => {
    const data = req.body;
    craetePriceinf(data)
    craetePriceinfo (data, (err, results) =>{
        if(err){
            res.send(err);
        }else {
            res.json(results)
        }
    });
};


export const updatepriceinfo = (data,id, result) => {
    database.query("UPDATE price_info SET product_name =?, product_price =?, WHERE product_id =?", [data.product_name, data.product_price, id], (err,results) =>{
        if(err){
            res.send(err);
        }else {
            res.json(results)
        }
    })  
}