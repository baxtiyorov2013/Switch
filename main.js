let day = Number(prompt("Noldan 7 gacha son kriting"))
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday"
        break;
    case 1:
        dayName = "Monday"
        break;
    case 2:
        dayName = "Tuesday"
        break;
    case 3:
        dayName = "Wednesday"
        break;
    case 4:
        dayName = "Thursday"
        break;
    case 5:
        dayName = "Firday"
        break;
    case 6:
        dayName = "Saturday"
        break;
    default:
        dayName = "Invalid day"
}
alert(dayName);

