const express = require ('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')

express()
    .use(express.static(path.join(__dirname, 'dist')))
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .set('views', path.join(__dirname, 'dist'))
    .set('view engine', 'html')
    .get('/', (req, res)=>{
        console.log("Entry point");
        res.render('index.html');
    })
    .listen(PORT, ()=> console.log(`Listening on ${ PORT }`));