const chainZero = (val,len) => {
  for(let i=1;i<len;i++) {
    val = val+"0"
  }
  return val
}

function toRoman(n) {
  if(n >= 4000) return "Only numbers between 1 and 3999"
  const romans = ["","","","I","II","III","IV","V","VI","VII","VIII","IX","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M","MM","MMM"]
  const decimals = ["000","00","0","1","2","3","4","5","6","7","8","9","10","20","30","40","50","60","70","80","90","100","200","300","400","500","600","700","800","900","1000","2000","3000"]
  let len = Math.ceil(Math.log10(n + 1))
  const places = []
  const num = n.toString()
  let result = ''


  for (i of num) {
    places.push(chainZero(i,len))
    len--
  }
  places.map((num,i) => {
    result += romans[decimals.indexOf(num)]
  })
  return result
}
