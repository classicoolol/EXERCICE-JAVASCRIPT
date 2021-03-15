do
{
    var nombre = parseInt(prompt("Introduisez un nombre compris entre 10 et 20"));
    if(nombre<10)
    {
        alert("plus grand");
    }
    else if(nombre>20)
    {
        alert("plus petit");
    }
    else if(nombre >=10 && nombre<=20)
    {
        alert("Bravo !");
    }
    else
    {
        alert("Introduisez une valeur numérique (Appuyer sur OK pour recommencer)");
    }

}while((nombre <10) || (nombre>20) || (isNaN(nombre)));

