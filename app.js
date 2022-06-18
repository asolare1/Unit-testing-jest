const sum = (a,b) => {
  return a + b
}
console.log(sum(7,3))

const fromDollarToYen = (Dollaramount) => {

  const Yen = ((Dollaramount / 1.2) * 127.9);
  
  return Yen

};
const fromEuroToDollar = (Euroamount) => {

  const dollars = ((Euroamount * 1.2));

  return dollars
};
const fromYenToPound = (Yenamount) => {

  let Pound = ((Yenamount / 127.9) * 0.8);

  return Pound

};



console.log(fromYenToPound(3.5))

module.exports = {sum, fromEuroToDollar, fromYenToPound, fromDollarToYen};