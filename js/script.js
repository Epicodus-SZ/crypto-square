function encrypt(originalString) {
  //convert to all lowercase
  debugger;
  var results = originalString.toLowerCase().replace(/\s/g, "").replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,"");
  var columns = Math.ceil(Math.sqrt(results.length));
  var rows = Math.ceil(results.length / columns);
  var total = columns*rows;
  //create an array of row items each item having column items inside it.
  var cryptoTable = [];
  var encodedString = "";

  //lets create the crypto table
  for (var rowIndex=0; rowIndex < results.length; rowIndex=rowIndex+columns) {
    //create the array (which has column data inside)
    cryptoTable.push(results.substring(rowIndex,rowIndex+columns).split(""));
  };
  //encryption code goes here
  for (var colCount = 0;colCount < columns;colCount++){
    for (var rowCount = 0;rowCount < cryptoTable.length;rowCount++){
      //bug here ..fix by checking for undefined and breaking out
      encodedString = encodedString + (cryptoTable[rowCount][colCount]);
  }
  }
  //Incrementing by 6 because our code adds and extra space to the string each loop
  for (var charCount = 0;charCount < encodedString.length;charCount+=6) {
    encodedString = encodedString.slice(0, charCount) + " " + encodedString.slice(charCount);
  }

  console.log("Original String:" + originalString, "stringlength:"+originalString.length + "/" + total + " columns:" + columns + "rows:" + rows, "encoded results: " + encodedString);

  return results;
}

encrypt("It takes a big man to cry, but it takes a bigger man to laugh at that man.");
