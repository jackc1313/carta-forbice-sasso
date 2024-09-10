function numeroCasuale() {
    return parseFloat(Math.random().toFixed(1));
}

function sceltaComputer() {
    if (numeroCasuale() <= 0.3) {
        return "sasso";
    }else if (0.3 < numeroCasuale() <= 0.6) {
        return "carta";
    } else if (0.6 < numeroCasuale() <= 0.9) {
        return "forbici";
    }
};

function laTuaScelta() {
    let scelta = prompt("Qual e' la tua scelta?", "");
    console.log(scelta);
    if (scelta = "sasso" || "carta" || "forbice" || "forbici") {
        return sceltaComputer();
    } else {
        return "inserisci un valore valido";
    }
};

console.log(laTuaScelta());