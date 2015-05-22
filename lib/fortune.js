/*Modulo "personalizzato" per la generazione dei fortunes casuali */
var fortunes = [
	"Conquista le tue paure oppure loro conquisteranno te",
	"I fiumi hanno bisono di molle",
	"Non temere quello che non conosci",
	"Avrai una piacevole sorpresa",
	"Ogni volta che è possibile, falla semplice",
];

/* Aggiungendo il il metodo getFortune alla variabile globale exports
 * si fa in modo che solo il metodo venga esportato (reso pubblico)
 * mentre la variablie/array fortunes rimane privata e quindi non
 * visibile/accedibile dall'esterno
*/
exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortunes.length);
	return fortunes[idx];
};