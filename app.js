// both packages express and bodyParser.
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = ['WakeUp at 5', 'Exercise', 'Meditate'];
const workItems = [];
// by npm install ejs (pack.json)
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
//its for use css Public->css->styles.css, because its not static website its on local host so i have to specify the express that provide me public folder and use css from it.
app.use(express.static('public'));
//`````````````````````````````````````````````````````````````
// first load up our home page
app.get('/', (req, res)=>{

const day = date.getDate();
 // reiterate the process,create response by rendering a file called list, which has to be in the exist inside a views folder & have the extension.
 res.render('list', {listTitle: day, newListItems: items});

});

// we go through this(line:14->29) route and we render our list.ejs(line:27) | kindOfDay&newListItems so newListItems is set to equal the items array which starts off containng three strings.
//````````````````````````````````````````````````````````````````
// '/' is a home route.
app.post('/', (req, res)=>{

const item =  req.body.newItem;

if(req.body.list === 'Work') {
  workItems.push(item);
  res.redirect('/work');
} else {
  items.push(item);
  res.redirect('/');
}

});

app.get('/work', (req, res)=>{
  res.render('list', {listTitle:'Work List', newListItems: workItems});
});

app.get('/about', (req, res)=>{
  res.render('about');
});

app.listen(3000, (req, res)=>{
  console.log('port run on 3000');
});
