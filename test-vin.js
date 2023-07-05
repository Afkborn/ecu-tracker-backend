const { verifyVIN, splitVIN } = require("./actions/VIN.js");

let vin = "WF0HXXWPJH4C56645";

console.log("VIN: ", vin);

console.log("Verify: ", verifyVIN(vin));

console.log("Split: ", splitVIN(vin));