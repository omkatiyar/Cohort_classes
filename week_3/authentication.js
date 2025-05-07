const express = require('express');
const {z} = require('zod');
const app = express();

const schema = z.array(z.number());
app.use(express.json());

app.post("/heart-healthy", function(req,res){
    const kidneys = req.body.kidneys;
    const respose = schema.safeParse(kidneys); // go to zod doc and check what safeParse does
    res.send(res.send({respose}));
});

app.listen(3000)
