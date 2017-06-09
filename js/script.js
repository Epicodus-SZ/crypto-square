function encrypt(originalString) {
  //convert to all lowercase
  var results = originalString.toLowerCase().replace(/\s/g, "").replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "");
  var columns = Math.ceil(Math.sqrt(results.length));
  var rows = Math.ceil(results.length / columns);
  var total = columns * rows;
  //create an array of row items each item having column items inside it.
  var cryptoTable = [];
  var encodedString = "";

  //lets create the crypto table
  for (var rowIndex = 0; rowIndex < results.length; rowIndex = rowIndex + columns) {
    //create the array (which has column data inside)
    cryptoTable.push(results.substring(rowIndex, rowIndex + columns).split(""));
  };
  //encryption code goes here
  for (var colCount = 0; colCount < columns; colCount++) {
    for (var rowCount = 0; rowCount < cryptoTable.length; rowCount++) {
      //need to check for undefined because the last row is not always full
      if (typeof cryptoTable[rowCount][colCount] != 'undefined') {
        encodedString = encodedString + (cryptoTable[rowCount][colCount]);
      } else break;
    }
  }
  //Incrementing by 6 because our code adds and extra space to the string each loop.
  //Starts at 5 so we don't add a space on the front of the string
  for (var charCount = 5; charCount < encodedString.length; charCount += 6) {
    encodedString = encodedString.slice(0, charCount) + " " + encodedString.slice(charCount);
  }
  console.log("Original String:" + originalString + "\nEncoded Results:" + encodedString + "\nString length:" + originalString.length + "\nColumns:" + columns + " - Rows:" + rows);
  return results;
}

encrypt("It takes a big man to cry, but it takes a bigger man to laugh at that man.");