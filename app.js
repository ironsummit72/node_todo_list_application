const express=require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');
const path=require('path');
const app = express();
const port=8080;
var items=[];

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));


// get route 

app.get('/', function(req, res) {
    res.render('index', {ListItems: items});
});
app.post('/', function(req, res) {
    console.log("your todo is : ",req.body.todos);
    items.push(req.body.todos);
    res.redirect('/')
    req.send('added');
})

app.listen(port,function(){
    console.log(`listening on port ${port}`);
});
