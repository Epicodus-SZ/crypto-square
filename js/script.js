//

var items = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//first number is row and the second is colomn

function encrypt(originalString) {
  //convert to all lowercase
  var results = originalString.toLowerCase().replace(/\s/g, "").replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,"");
  var columns = Math.ceil(Math.sqrt(originalString.length));
  var rows = Math.ceil(originalString.length / columns);
  var total = columns*rows;
  //create an array of row items each item having column items inside it.
  var cryptoTable = [];
  //lets create the crypto table
  for (var rowIndex=0; rowIndex < originalString.length; rowIndex=rowIndex+columns) {
    //create the array (which has column data inside)
    cryptoTable.push(results.substring(rowIndex,rowIndex+columns).split(""));
  };
  console.log(cryptoTable);

  console.log("stringlength:"+originalString.length + "/" + total + " columns:" + columns + "rows:" + rows);

  return results;
}


console.log(encrypt("abcdefghijklmnopqrstuvwxyz56012345601234560123456"));
