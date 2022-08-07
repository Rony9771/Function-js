function IsLeapYear(year){

  if ( year % 400==0 || year %4==0 && year % 100 !=0){
    console.log("This year is leap year");
  }
  
  else{
    console.log("Not a leap year");
  }
  return year;
}

const checYear = IsLeapYear(1900);