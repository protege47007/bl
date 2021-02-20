const express = require('express');
const bp = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('home', {title: "Home"});
});

app.get('/about', (req, res)=>{
    res.render('about', {title: "About Us"});
});

app.get('/contact', (req, res)=>{
    res.render('contact', {title: "Contact Us"});
});






app.listen('3030', ()=>{
    console.log("Server is Live and running!");
})
