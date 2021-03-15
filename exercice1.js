


var PHT = parseFloat(prompt("Veillez entrer le prix unitaire hors taxe"));
var NombreArticle = parseInt(prompt("Veillez entrer le nombre d'article"));
var tauxtva = 0.16;
var TVA = (PHT*tauxtva*NombreArticle);
var PTTC = ((PHT*NombreArticle) + TVA);
alert("Prix Hors TAxe : "+PHT+", Taux TVA : "+tauxtva+", Nombre article : "+NombreArticle+", TVA : "+TVA+", Prix Toute Taxe Comprise : "+PTTC);