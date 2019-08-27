function clculateFactorielle() {
    var x = 10;
    var result = 1;
    for (i = 10; i >= 2; i--) {
        result = result * i
    }
    console.log(result);
    result = result.toLocaleString();
    document.getElementById('resultFact').value = result;
}


function otherWay() {
    var selectedNumber = parseInt(prompt("choisissez un nombre entre 0 et 10"));
    var fact = 1;
    if (selectedNumber == 0) {
        fact = fact;
    } else {
        for (var i = 1; i <= selectedNumber; i++) {
            fact = fact * i;
        }
    }
    fact = fact.toLocaleString();
    alert(fact.toLocaleString());
}

function recursiveCall() {
    let selectedNumber = parseInt(prompt("choisissez un nombre entre 0 et 10"));

    function recursive(selectedNumber) {
        return selectedNumber > 1 ? selectedNumber * recursive(selectedNumber - 1) : 1;
    }
    var x = recursive(selectedNumber);
    console.log(x);

}