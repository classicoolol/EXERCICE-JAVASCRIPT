do
{
    var nombre=parseInt(prompt("Entrer le nombre"));
    if(nombre<0 || isNaN(nombre))
    {
        alert("veuillez saisir un entier positif ou null(cliquez sur ok pour recommencer)");
    }
    else
    {
        var facto = 1;
        for(var i=1;nombre>=i;++i)
        {
            facto = (facto*i);
        }
    }
}while(nombre<0 || isNaN(nombre));


alert("factorielle vaut : "+facto);

