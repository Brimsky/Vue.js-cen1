
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