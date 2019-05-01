/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  var validUnits = ['gal','l','mi','km','lbs','kg'];
  
  this.getNum = function(input) {
    var result;    
    
    // split input at first letter to get number
    var num = input.split(/[a-zA-Z](.*)/)[0];
    // if there is no number then default to 1
    if(!num) {
      return result = 1;
    }
    
    // split num at fraction '/', if any
    var numArr = num.split('/');
    // result is first number in numArr (so could be before the split)
    result = numArr[0];
    // if there is a number after the split and the first and second numbers in the array are numbers, then execute the fraction
    if(numArr[1] && !isNaN(numArr[0]) && !isNaN(numArr[1])) {
      result = numArr[0] / numArr[1];
    };
    // if numArr is too long then there's too many fractions e.g 1/2/3 is not a fraction or if the initial number is not a number then invalid number
    if(numArr.length > 2 || isNaN(numArr[0])) {
      return result = "invalid number";
    }
    // if the fraction we are dividing by is not
    if(numArr[1] && isNaN(numArr[1])) {
      return result = "invalid number";
    }
    
    return Number(result);
  };
  
  this.getUnit = function(input) {
    var result;
    
    let arr = input.split(/[0-9/.]/);
    
    if(validUnits.includes(arr[arr.length - 1].toLowerCase())) {
      result = arr[arr.length - 1];
    } else {
      result = "invalid unit"; 
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit.toLowerCase()) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
    };
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit.toLowerCase()) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;

    };
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    if(isNaN(initNum)) {
      return;
    }
    var result;
    
    switch(initUnit.toLowerCase()) {
      case "gal":
        result = (initNum * galToL).toFixed(5);
        break;
      case "l":
        result = (initNum / galToL).toFixed(5);
        break;
      case "lbs":
        result = (initNum * lbsToKg).toFixed(5);
        break;
      case "kg":
        result = (initNum / lbsToKg).toFixed(5);
        break;
      case "mi":
        result = (initNum * miToKm).toFixed(5);
        break;
      case "km":
        result = (initNum / miToKm).toFixed(5);
        break;
    }  

    return Number(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    if(initNum != "invalid number" && initUnit != "invalid unit") {
      result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;