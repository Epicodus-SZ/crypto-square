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
console.log("stringlength:"+originalString.length + "/" + total + " columns:" + columns + "rows:" + rows);

  return results;
}
console.log(encrypt("Joel bakken was HERE,  a#* nd he did a good job? What an aweson partner he has!"));
console.log(encrypt("Joe bakken was HERE,  a#* nd he did a good job?"));
console.log(encrypt("Joel ken was HERE,  a#* nd he did a good job?"));
console.log(encrypt("Joel was HERE,  a#* nd he did a good job?"));
console.log(encrypt("Joel s HERE,  a#* nd he did a good job?"));
console.log(encrypt("Joel E,  a#* nd he did a good job?"));
console.log(encrypt("Joel a#* nd he did a good job?"));
console.log(encrypt("Joel he did a good job?"));
console.log(encrypt("Joel he did a goodrr job?"));
console.log(encrypt("Joel a good job?"));
