const express = require('express');
const bp = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();

app.use('view engine', 'ejs');
app.use(bp.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res)=>{

});







app.listen('3030', ()=>{
    console.log("Server is Live and running!");
})
