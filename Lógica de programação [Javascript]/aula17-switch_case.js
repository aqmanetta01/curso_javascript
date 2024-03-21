
function teste (key){
    switch (key){
        case "Julio":
        case "Julia":
            console.log("Julio ou Julia");
            break;
        case "Jose":
            console.log("Jose");
            break;
        case "Joao":
            console.log("Joao");
            break;
        default:
            console.log("Default");
            break;
    }
}

teste("Julio");
teste("Julia");
teste("Jose");
teste("Joao");
teste("Tonin");