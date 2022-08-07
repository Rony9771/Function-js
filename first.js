function food (money){
  var apple =20;
  var quantity =money/apple;
  return quantity;
}

var take = 200;
var total= food (take);
console.log("Total Fruits",total);