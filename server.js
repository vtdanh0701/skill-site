const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set("view engine", 'ejs');
app.use(layouts);

var contact = {
	name: "Dan Vuong",
	email: "vtdanh0701@gmail.com",
	phone: "206-503-6404",
	fax: "Who uses faxes anymore?",
	site: "http://dvuong.io"
};

var skills = [
	"JavaScript",
	"HTML 5",
	"CSS 3",
	"Node JS",
	"Express JS"
];

app.get('/', function(req, res){
	res.render('index');
})

app.get('/contact', function(req, res){
	res.render('contact', {contact});
})

app.get('/skills', function(req, res){
	res.render('skills', {skills});
})
app.listen(3000, function(){
    console.log("Up and running on 3000... 😁");
});