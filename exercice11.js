var continuer ="1"
var position = 0 ;
var notePhysique = []

while(continuer =="1")
{
    notePhysique[position] = parseInt(prompt("Entrer la note "+(position + 1)+ ": "))
    while(notePhysique[position]<0||isNaN(notePhysique[position]))
    {
        notePhysique[position] = parseInt(prompt("Entrer une valeur numérique supérieure à 0"))
    }
    position++;
    continuer = prompt("cliquez sur 1 pour continuer ou autre touche pour arrêter");

}

var somme = 0;
var reussite = 0;

for(var i=0; i<=notePhysique.length;i++)
{
    if(notePhysique[i]>=10)
    {
        somme = somme + notePhysique[i];
        reussite++;
    }
}

var moyenne = (somme/reussite);
alert("La moyenne des réussites vaut : "+moyenne);