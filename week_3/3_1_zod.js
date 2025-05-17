const express = require('express');
const {z} = require('zod');
const app = express();
// if we want to force something to be of some other type, then we use coercion (it is for primitive types only)
// const schema = z.coerce.string
// schema.parse(12) => this will convert from number to string ("12").

const schema = z.array(z.number());
app.use(express.json());

app.post("/heart-healthy", function(req,res){
    const kidneys = req.body.kidneys;
    const respose = schema.safeParse(kidneys); // go to zod doc and check what safeParse does
    res.send(res.send({respose}));
});

app.listen(3000)

function validateInput(obj){
    const schema = z.object({
        email : z.string().email(),
        password : z.string().min(8)
    });
    const resp = schema.safeParse(obj);
    console.log(resp);
}
let obj = {
    email : "test@gmail.com",
    password : "123456789"
}
validateInput(obj);