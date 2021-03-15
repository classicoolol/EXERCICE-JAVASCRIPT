//Dictionnaire préalablement créé
var Dictionnaire =["Bonjour", "Bonsoir", "Salut", "Madesu", "Parler", "Discuter", "dialoguer", "bonjour", "bonsoir", "salut", "madesu", "parler", "discuter", "dialoguer"]
var resultat ="le mot n'existe pas sur le dictionnaire"; 

do
{
    var valeur = prompt("Saisissez un mot").toLowerCase();
    if(isNaN(valeur))
    {
        for(var i=0; i<Dictionnaire.length; i++)
        {
            if(valeur == Dictionnaire[i])
            {
                resultat ="Le mot saisi existe dans le dictionnaire"
            }
        }
    }
    else
    {
        alert("un mot svp !")
    }
}while(!(isNaN(valeur)))

alert(resultat);