// let day = Number(prompt("Birdan 7 gacha son kriting"))
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "Sunday"
//         break;
//     case 2:
//         dayName = "Monday"
//         break;
//     case 3:
//         dayName = "Tuesday"
//         break;
//     case 4:
//         dayName = "Wednesday"
//         break;
//     case 5:
//         dayName = "Thursday"
//         break;
//     case 6:
//         dayName = "Firday"
//         break;
//     case 7:
//         dayName = "Saturday"
//         break;
//     default:
//         dayName = "Invalid day"
// }
// alert(dayName);

let savola = +prompt("luboy son kriting")

switch (savola) {
    case 0:
        let a = 10, b = 5;
        savol = Math.floor(Math.sqrt(a * b))
        console.log(savol);
        break;
    case 1:
        savol = Math.floor(Math.random() * 10)
        console.log(savol);
        break;
    case 2:
        for (let i = 0; i < 10; i++) {
            if (i % 2 === 0) {
                console.log("Hello mars" + i);
            }
        }
        break;
    case 3:
        let pustoy = []
        for (let i = 0; i < 11; i++) {
            if (i % 2 == 1) {
                pustoy.push(i);
            }

        }
        console.log(pustoy);
}