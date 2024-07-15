let express = require('express');
let dotenv = require('dotenv');

dotenv.config({path:'./config.env'})
let app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public/'))

app.get('/',(req,res)=>{
    res.send('Admin Display');
})

let homeroute = require('./route/backend/admin');
let headerroute = require('./route/backend/header');
app.use('/home',homeroute);
app.use('/home/header/',headerroute);
app.listen(200, ()=>{
    console.log('Port 200 successfully working');
})
