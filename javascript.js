function sceltaComputer() {
    if (Math.random() <= 0.3) {
        return "sasso";
    }else if (0.3 < Math.random() <= 0.6) {
        return "carta";
    } else {
        return "forbici";
    }
};

console.log(sceltaComputer());