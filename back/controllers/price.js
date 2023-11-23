import {getallpricedata, getdizozols} from '../models/pricedata.js';

export const getallpricedata = (req, res) =>{
    showPrice((err,results) =>{
        if(err){
            res.send(err);
        }else {
            res.json(results)
        }
    });
};

export const getdizozols = (req,res) => {
    getdizozols(req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results)
        }
    });
};

