function receivesAFunction(callback){
    return callback ();
}


function returnsANamedFunction(){
    function namedFunction(){
        console.log("Named Function");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log("Anonymous Function");
    }
}
