do
{
    var nombre = parseInt(prompt("Introduisez un nombre"));
    if(isNaN(nombre))
    {
        alert("veuillez introduire une valeur numerique");
    }
   
}while(isNaN(nombre));
alert("le carré de "+nombre+" vaut : "+nombre*nombre);