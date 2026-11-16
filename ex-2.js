//Exercise 2
let lightBulbStatus = "go";

// Start coding here.
if (lightBulbStatus === "On") {
    lightBulbStatus = "Light bulb is On.";
} else if (lightBulbStatus === "off") {
    lightBulbStatus = "Light bulb is Off.";
} else if (lightBulbStatus === "Broken"){
    lightBulbStatus = "Light bulb is Broken."
} else {
    lightBulbStatus = ` “Please choose the correct input (On/Off/Broken)” ` ;
}

console.log(lightBulbStatus)

