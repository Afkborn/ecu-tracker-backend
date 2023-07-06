const { verifyVIN, splitVIN } = require("./actions/VIN.js");

const generatedVinNumbers = [
    "1G8ZH5280YZ123456",
    "JH4CL9685YB654321",
    "WBASP31080C987654",
    "3FAFP37N2YR987654",
    "SAJDA82B9YV876543",
    "KLATM4343YR234567",
    "YV1LS53N8YR345678",
    "JM1BJ2220YR456789",
    "5TBBT4410YR567890",
    "2G1WC5811YR678901",
    "WBA3C3206YR789012",
    "1HGCM8260YR890123",
    "JTEHT05J2YR901234",
    "3VWTD61K1YR012345",
    "1C4NJDEB2YR123456",
    "KL1TG5265YR234567",
    "KMHTC6AD9YR345678",
    "WVWZZZ1K7YR456789",
    "SCBLC37F0YR567890",
    "WBAVM1C56YR678901",
    "WF0HXXWPJH4C56645",
    "1G1ZT5281YR789012",
    "JH4UA3650YR890123",
    "WBAPH7750YR901234",
    "3FAHP0HA1YR012345",
    "SAJWA1C5YR1234567",
    "KLATM4343YR234567",
    "YV1MS382YR3456789",
    "JM1BK32F7YR456789",
    "5TBCT5210YR567890",
    "2G1WF52K9YR678901",
    "WBA3B5200YR789012",
    "1HGCR2F8YR8901234",
    "JTEHT05J9YR901234",
    "3VWTD61K3YR012345",
    "1C4RJEBG1YR123456",
    "KL1TG5265YR234567",
    "KMHTC6AD4YR345678",
    "WVWZZZ1K1YR456789",
    "SCBLC37F7YR567890",
    "WBAVM1C50YR678901",
    "1G8ZS5282YR789012",
    "JH4UA3651YR890123",
    "WBAPH7751YR901234",
    "3FAHP0HA2YR012345",
    "SAJWA1C6YR1234567",
    "KLATM4344YR234567",
    "YV1MS3821YR345678",
    "JM1BK32F8YR456789",
    "5TBCT5211YR567890",
    "2G1WF52K0YR678901",
    "WBA3B5201YR789012",
    "1HGCR2F9YR8901234",
    "JTEHT05J0YR901234",
    "3VWTD61K4YR012345",
    "1C4RJEBG2YR123456",
    "KL1TG5266YR234567",
    "KMHTC6AD5YR345678",
    "WVWZZZ1K2YR456789",
    "SCBLC37F8YR567890",
    "WBAVM1C51YR678901",
    "1G8ZS5283YR789012",
    "JH4UA3652YR890123",
    "WBAPH7752YR901234",
    "3FAHP0HA3YR012345",
    "SAJWA1C7YR1234567",
    "KLATM4345YR234567",
    "YV1MS3822YR345678",
    "JM1BK32F9YR456789",
    "5TBCT5212YR567890",
    "2G1WF52K2YR678901",
  ];

function generateWrongVinNumbers(count) {
  var vinNumbers = [];

  for (var i = 0; i < count; i++) {
    var vin = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var j = 0; j < 17; j++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      vin += characters.charAt(randomIndex);
    }

    vinNumbers.push(vin);
  }

  return vinNumbers;
}

function getRandomGeneratedVinNumber(count) {
  var vinNumbers = [];

  for (var i = 0; i < count; i++) {
    var randomIndex = Math.floor(Math.random() * generatedVinNumbers.length);
    vinNumbers.push(generatedVinNumbers[randomIndex]);
  }

  return vinNumbers;
}

const vins = [
  ...getRandomGeneratedVinNumber(10),
  ...generateWrongVinNumbers(10),
];


let vinVerifyTrueCount = 0;
let vinVerifyFalseCount = 0;

vins.forEach((vin) => {
  if (verifyVIN(vin)) {
    console.log("VIN: ", vin);
    console.log("Verify: ", verifyVIN(vin));
    console.log("Split: ", splitVIN(vin));
    vinVerifyTrueCount++;
  } else {
    vinVerifyFalseCount++;
  }

});

console.log("vinVerifyTrueCount: ", vinVerifyTrueCount);
console.log("vinVerifyFalseCount: ", vinVerifyFalseCount);
console.log("ok");
