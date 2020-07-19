// LEXICAL ENVIRONMENT (Scope)

// Global Environment
var myVariable = "Gani";
console.log(myVariable);
//console.log(this);
//console.log(`1. text2=>${text2}`);
//console.log(`1. text3=>${text3}`);
//console.log(`1. myVariable=>${myVariable}`);
{
    // FIRST LEXICAL ENVIRONMENT
    var text1 = "Izzet";
    var text2 = "Onur";
    var myVariable="Gani2";
    console.log(`2. myVariable=>${myVariable}`);
    //console.log(`2. text1=>${text1}`);
    //console.log(`2. text3=>${text3}`);
    {
        //SECOND LEXICAL ENVIRONMENT
        myVariable = "Ziya";
        //let text3 = "Firat";
        console.log(`3. myVariable=>${myVariable}`);
        //console.log(`3. text3=>${text3}`);
    }
}
