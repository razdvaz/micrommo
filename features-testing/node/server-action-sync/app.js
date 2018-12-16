const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded());
app.stat
//app.set('port', process.env.PORT || 3333);
app.set('port', 3000);

app.get('/', home_page);
app.get('/public/style.css', get_style);

function home_page(request, response){
    response.sendfile('./public/index.html');
};

function get_style(request, response){
	response.sendfile('./public/style.css');
}

app.listen(app.get('port'), () => console.log('express start'));
