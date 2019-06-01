function encoder(code) {
  let encode = "";
  let count = 1;
  let pre = code.charAt(0);

  for (let i = 1; i <= code.length; i++) {
    if (i < code.length && code.charAt(i) == pre) {
      count++;
    } else {
      if (count > 4) {
        let num = count.toString(10);
        encode += pre + "(" + num + ")";
      } else {
        for (let j = 0; j < count; j++) encode += pre;
      }
      pre = code.charAt(i);
      count = 1;
    }
  }

  return encode;
}

export { encoder as default };

// let re = /(.)\1{4,}/g;
// let i = 0;
// let len = code.length;
// while (i < 10) {
//  let p = "";
//  for (let x = i; x < len; x++) {
//    p += code.charAt(x);
//  }
//  console.log(p)
//  let match = p.match(re);
//  if (match != null) {
//    let count = match[0].length;
//    let num = count.toString(10);
//    encode += code.charAt(i) + "(" + num + ")";
//    i += count;
//    console.log(match)
//  } else {
//    encode += code.charAt(i);
//    i++;
//  }
// }
