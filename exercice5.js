var resultat ="le produit de ces deux nombres est positif";
do
{
    var nombre1 =parseInt(prompt("Le premier nombre"));
    var nombre2 = parseInt(prompt("Le deuxième nombre"));
    if(isNaN(nombre1)||isNaN(nombre2))
    {
        alert("veuillez saisir une valeur numérique (appuyer sur OK pour recommencer)");
    }
    else
    {
        if((nombre1*nombre2) < 0)
        {
            resultat ="le produit de ces deux nombres est négatif";
        }
        else if((nombre1*nombre2) == 0)
        {
            resultat="";
        }
    }
}while(isNaN(nombre1)||isNaN(nombre2));

if(resultat!="")
{
    alert(resultat);
}