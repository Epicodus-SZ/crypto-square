var items = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//first number is row and the second is colomn


function encrypt(originalString) {
  //convert to all lowercase
  var results = originalString.toLowerCase().replace(/\s/g, "").replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,"");
  return results;
}
console.log(encrypt("Joel bakken was HERE,  a#* nd he did a good job?"))
