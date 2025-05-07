// UGLY way of writing code
const express = require('express')
const app = express()
app.use(express.json());

let start=0;let end=0; let reqNum=0;

app.get('/health-checkup', function(req,res){
    let kidneyId = req.query.kidneyId;
    let username = req.headers.username;
    let password = req.headers.password;
    if(!(username=="harkirat" || password=="pass")){
        res.json({msg:"wrong username or password"});
    }
    if(kidneyId!=1 && kidneyId!=2){
        res.json({
            msg:"wrong inputs"
        });
    }
    res.json({msg: "Your kidney is fine"});
})

// app.listen(3000)

// CLEAN WAY to write above code using middlewares
function usermiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(!(username=="harkirat" || password=="pass")){
    res.status(403).json({msg:"wrong user credentials"});
    }
    else{
        next();
    }
}
function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    // if(kidneyId == 1 || kidneyId == 2){
        // next();
    if(kidneyId!=1 && kidneyId !=2){
        res.status(403).json({msg:"wrong input"});
    }
    else{
        next();
    }
}
function averageTimeCalculateBetweenRequestMiddleware(req,res,next){
    start = Date.now();
    console.log("start_time is ", start);
    reqNum++;
    next();
}
app.get("/kidney-checkup",averageTimeCalculateBetweenRequestMiddleware,usermiddleware, kidneyMiddleware, function(req,res){
    end = Date.now();
    console.log(end*1000);
    console.log("number of requests are ",reqNum);
    console.log("end is ", end);
    res.json({msg:"Your kidney is healthy, average time taken is `{end-time}",
            time_taken: (end-start)/reqNum});
})

// global catches. They are called when there is an error in the application. The syntax is:
app.use(function(err,req,res,next){
    res.status(500).json({msg: "Our server is down"})
})

app.listen(3000);