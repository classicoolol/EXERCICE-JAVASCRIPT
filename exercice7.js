do
{
    var nombre = parseInt(prompt("Veuillez saisir un nombre"));
    if(isNaN(nombre))
    {
        alert("Veuillez saisir une valeur numerique (Appuyer sur OK pour recommencer)");
    }
    else if(nombre<0)
    {
        alert("Veuillez introduire un entier positif (Appuyer sur OK pour recommencer)");
    }
    else
    {
        var somme = 0;
        for(var i=1; i<=nombre; i++)
        {
            somme = somme + i ;
        }
        alert("la somme de "+nombre+" premiers entiers vaut : "+somme);
    }

}while(isNaN(nombre)|| (nombre<0))