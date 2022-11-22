function initialize() {
    pennies = document.getElementById("penny");
    nickels = document.getElementById("nickel");
    dimes = document.getElementById("dime");
    quarters = document.getElementById("quarter");
    pValue = document.getElementById("pennyValue");
    nValue = document.getElementById("nickelValue");
    dValue = document.getElementById("dimeValue");
    qValue = document.getElementById("quarterValue");
    tValue = document.getElementById("total");
    penny = 0;
    nickel = 0;
    dime = 0;
    quarter = 0;
    display();
}

function subtractPennies() {
    if (penny > 0) {
        penny--;
    }
    display();
}

function addPennies() {
    penny++;
    display();
}

function subtractNickels() {
    if (nickel > 0) {
        nickel--;
    }
    display();
}

function addNickels() {
    nickel++;
    display();
}

function subtractDimes() {
    if (dime > 0) {
        dime--;
    }
    display();
}

function addDimes() {
    dime++;
    display();
}

function subtractQuarters() {
    if (quarter > 0) {
        quarter--;
    }
    display();
}

function addQuarters() {
    quarter++;
    display();
}


function display() {
    pennies.innerHTML = penny;
    nickels.innerHTML = nickel;
    dimes.innerHTML = dime;
    quarters.innerHTML = quarter;
    pennyValue = 0.01 * penny;
    nickelValue = 0.05 * nickel;
    dimeValue = 0.1 * dime;
    quarterValue = 0.25 * quarter;
    total = pennyValue + nickelValue + dimeValue + quarterValue;
    pValue.innerHTML = pennyValue;
    nValue.innerHTML = nickelValue;
    dValue.innerHTML = dimeValue;
    qValue.innerHTML = quarterValue;
    tValue.innerHTML = total;
}
