function sceltaComputer() {
    if (Math.random() <= 0.3) {
        return "sasso";
    }else if (0.3 < Math.random() <= 0.6) {
        return "carta";
    } else {
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