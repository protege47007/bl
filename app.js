// constants declarations
const express = require('express');
const bp = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');


const homeInfo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto quia fugiat, minus debitis quo deleniti repellat sint ipsum quae ex dicta, eum dolor hic saepe excepturi voluptas error tenetur delectus similique quas sequi vel? Sint repellendus quam quia pariatur temporibus officia in, ad libero dignissimos neque minus impedit nihil!";

const app = express(); //express initialisation

//app static files, body-parser, & EjS intiailisation
app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended: true}));
app.use(express.static('public'));

//home route
app.get('/', (req, res)=>{
    res.render('home', {
        title: "Home",
        info: homeInfo,
        post: posts
    });
});


//about route 
app.get('/about', (req, res)=>{
    res.render('about', {
        title: "About Us",
        info: homeInfo
    });
});

//contact route
app.get('/contact', (req, res)=>{
    res.render('contact', {
        title: "Contact Us",
        info: homeInfo
    });
});

//Compose page section
app.get('/compose', (req, res)=>{
    res.render('compose', {title: "Compose"});
});

//post db
const posts = [];

app.post('/compose', (req, res)=>{
    const newComp = {
        title: req.body.titleTxt,
        body: req.body.txt
    };
    posts.push(newComp);
    res.redirect('/');
});

//post page section
app.get('/post', (req, res)=>{
    res.render('post', {title: "Post"});
});

//get params
app.get('/posts/:page', (req, res)=>{
    posts.forEach((e)=>{
        if(_.lowerCase(e.title) === _.lowerCase(req.params.page)){
            res.render('temp', {
                title: e.title,
                jH: e.title,
                j: e.body
            })
        }  
    })
})


//Server initialisation
app.listen('3030', ()=>{
    console.log("Server is Live and running!");
})
