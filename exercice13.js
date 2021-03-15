var longueurTab = parseInt(prompt("Entrer la taille des tableaux"))
while(longueurTab<0 || isNaN(longueurTab))
{
    longueurTab = parseInt(prompt("Entrer une valeur numérique supérieure à 0"))
}
alert("Les éléments du premier tableau")
var tableau1=[]
for(var i=0; i<longueurTab;i++)
{
    do
    {
        tableau1[i]=parseInt(prompt("Element "+(i+1)+" du tableau 1"))
    }while(isNaN(tableau1[i]))
}
alert("Les éléments du deuxième tableau")
var tableau2=[]
for(var j=0; j<longueurTab;j++)
{
    do
    {
        tableau2[j]=parseInt(prompt("Element "+(j+1)+" du tableau 2"))
    }while(isNaN(tableau2[j]))
}

var tableau3=[]
for(var i=0; i<longueurTab;i++)
{
    tableau3[i] = tableau1[i] + tableau2[i]
}

console.log(tableau3)