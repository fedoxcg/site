var express = require('express');
var fortune = require('./lib/fortune.js');

var app = express();

//Impostazione del rendering engine (mustache)
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Constringi il processo (server) ad utilizzare la porta 3000
app.set('port', process.env.PORT || 3000);

//Static middleware
app.use(express.static(__dirname + '/public'));

/* Questa è la parte rellativa alla gestione/implementazione delle routes
 * cha va posta prima dei middleware relativi alla gestione degli errori,
 * altrimenti al client non sarà inviata alcuna pagina (route).
*/
app.get('/', function(request, response) {
	response.render('home');
});

app.get('/about', function(request, response) {
	response.render('about', {fortune: fortune.getFortune()});
});

/* Questa è tutta la parte relativa al middleware che deve venire dopo
 * quella relativa alle routes perchè altrimenti le richieste vengono
 * intercettate dai middleware e al client non verrà visualizzata alcuna
 * pagina, eccetto quelle relative ai messaggi di errore.
*/
//Pagina 404 personalizzata
app.use(function(request, response) {
	response.status(404);
	response.render('404');
});

//Pagina 500 personalizzata
app.use(function(request, response) {
	response.status(500);
	response.render('500');
});

app.listen(app.get('port'), function() {
	console.log('Expresponses started at http://127.0.0.1 on port ' +
	app.get('port') + '; press ctrl-C to terminate');
});