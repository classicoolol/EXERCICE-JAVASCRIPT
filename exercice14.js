var longueurTab = parseInt(prompt("Entrer la taille du tableaux"))
while(longueurTab<0 || isNaN(longueurTab))
{
    longueurTab = parseInt(prompt("Entrer une valeur numérique supérieure à 0"))
}
alert("Entrer les éléments du tableau")
var tableau=[]
for(var i=0; i<longueurTab;i++)
{
    do
    {
        tableau[i]=parseInt(prompt("Element "+(i+1)+" du tableau"))
        if(isNaN(tableau[i]))
        {
            alert("Attention la valeur doit être numérique(Appuyer sur OK pour recommencer)")
        }
    }while(isNaN(tableau[i]))
}

var max = 0
var position = 0

for(var i=0;i<longueurTab;i++)
{
    if(tableau[i]>max)
    {
        max = tableau[i]
        position = i
    }
}
alert("la plus grande valeur du tableau est : "+max+" située à la position "+(position+1))
