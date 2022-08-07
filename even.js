function isEven(number){
  const remainder = number % 2;
  if (remainder==0){
    console.log("Number is Even",true);
  }
  else{
    console.log("Number is Odd",false);
  }
  return remainder;
}

const checkeven =isEven(200);
//console.log(checkeven);
const chkEven = isEven(303);