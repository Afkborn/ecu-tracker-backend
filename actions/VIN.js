
const wmiCodes = require("../constants/WMI.json");
const supportManufacturers = ["Ford of Europe"];
const fordOfEuropeCodes = require("../constants/FordOfEurope.json");
const verifyVIN = (vin) => {
  if (vin.length !== 17) {
    return false;
  }
  return true;
};

const decodeFordOfEurope = (vin) => {
  bodyCode = vin.substring(3,4); // 4 
  console.log("bodyCode: ", bodyCode);
};

const splitVIN = (vin) => {
  const isValid = verifyVIN(vin);

  const wmi = vin.substring(0, 3); // 1-3
  const country = wmiCodes[wmi]["country"];
  const manufacturer = wmiCodes[wmi]["manufacturer"];
  let generalInformation = [];
  if (supportManufacturers.includes(manufacturer)) {
    switch (manufacturer) {
      case "Ford of Europe":
        generalInformation = decodeFordOfEurope(vin);
      default:
        generalInformation = [];
    }
  }

  const vds = vin.substring(3, 11); // 4-9
  const serialNumber = vin.substring(11, 17); // 12-17
  const yearCode = vin.substring(9, 10); // 10
  return {
    vin,
    isValid,
    country,
    manufacturer,
    wmi,
    vds,
    serialNumber,
    yearCode,
    generalInformation,
  };
};

module.exports = {
  verifyVIN,
  splitVIN,
};
