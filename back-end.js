function whatCanIDoLegally(age){
  if(age<18){return "You can't do anything";}
  else if(age >= 18 && age <= 21){return "You can drive but don't drink.";} 
  else {return "You can do either but don't do both at the same time.";}
}
module.exports = whatCanIDoLegally;