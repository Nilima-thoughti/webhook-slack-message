const express = require("express");
const axios = require("axios");
const app = express();

app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    //res.send("Its working");
    res.render('index.ejs');
})

app.post('/form-submit',(req,res)=>{
    //res.send(req.body);
    axios
        .post('https://hooks.slack.com/services/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',{
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `Name: *${req.body.name}*\n\n Email:*${req.body.email}*`
                    }
                }
            ]
        }).then(()=>{
        res.send("Form Submitted");
        }).catch(()=>{
        res.send("Form Failed");
        })
})

app.listen(3000,()=>{
    console.log("Your App is working Properly 3000!");
})