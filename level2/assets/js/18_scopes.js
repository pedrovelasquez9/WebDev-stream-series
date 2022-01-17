//Tipos de scope
//Scope global
var variableGlobal = "Hola scope global!";
//Acceso a la variable global
console.log(variableGlobal);
automatica = "Variable automatica";

//Scope local
function saludar(){
    var variableLocal = "valor local";
    let variableDeFuncion = "hola let en funcion";
    //Acceso a la variable global
    console.log(variableGlobal);
    console.log(automatica);
    if(true){
        //Accede a la variable declarada con let en el bloque padre
        console.log(variableDeFuncion);
        //blockScope y BLOCK_CONSTANT solo viven en el bloque del if y no son accesibles fuera de el
        let blockScope = "Scope de bloque";
        const BLOCK_CONSTANT = "Mi constante";
        //Scope lexico
        var varBlockScope = "Scope de bloque con var";
    }
    //Scope lexico (accede a la variable declarada con var en el if)
    console.log(varBlockScope);
    //console.log(blockScope);
    //console.log(BLOCK_CONSTANT);
    //Acceso a la variable local
    console.log(variableLocal);
}

//console.log(varBlockScope);
//console.log(variableLocal);
//No puede acceder a la variable local "variableLocal" definida en la funcion
saludar();