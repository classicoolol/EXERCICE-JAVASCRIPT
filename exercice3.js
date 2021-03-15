
do
{
    var nombre1 = parseInt(prompt("Veillez introduire le premier nombre"));
    if(isNaN(nombre1))
    {
        alert("introduisez une valeur numérique")
    }
}while(isNaN(nombre1))

do
{
    var nombre2 = parseInt(prompt("Veillez introduire le premier nombre"));
    if(isNaN(nombre2))
    {
        alert("introduisez une valeur numérique")
    }
}while(isNaN(nombre2))

var somme = (nombre1 + nombre2);
var produit = (nombre1*nombre2);
var division = (nombre1/nombre2);
var soustraction = (nombre1-nombre2);
alert(nombre1+" + "+nombre2+" = "+somme+",      "+nombre1+" x "+nombre2+" = "+produit+",        "+nombre1+" / "+nombre2+" = "+division+",       "+nombre1+" - "+nombre2+" = "+soustraction)