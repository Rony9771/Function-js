var shopping = {
  apple: 2,
  mango: 5,
  orange: 7,
  date : "1kg",
  melon : '2pc'
}
// Get 
var item = shopping.apple;
console.log(item);
var item2 =shopping["mango"];
console.log(item2);

var propertyName =Object.keys("shopping");
console.log(propertyName);
var propertyValue =Object.values("shopping");
console.log(propertyValue);
 for (var i=0; i< propertyName.length; i++){
  var len =propertyName[i];
  console.log(len);
 }