function toRoman(number) {
  if(!Number.isInteger(number)) {return false}
  if(number > 3999) {return false}
  roman_numerals = {
        'M'  : 1000,
        'CM' : 900,
        'D'  : 500,
        'CD' : 400,
        'C'  : 100,
        'XC' : 90,
        'L'  : 50,
        'XL' : 40,
        'X'  : 10,
        'IX' : 9,
        'V'  : 5,
        'IV' : 4,
        'I'  : 1
  }
  let matches = 0;
  let res = ""
  for (let [roman, numeral] of Object.entries(roman_numerals)) {
    matches = number / numeral;
    //whether matches exist, it tells how many repetitions
    res += roman.repeat(parseInt(matches));
    //get the next number of the argument
    number = number % numeral;
  }
  return `${original} to Roman: ${res}`
}
