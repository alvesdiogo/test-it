// LIBs
import Enumerable from "linq";

export const TestConsole = () => {
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

  const pares = Enumerable.from(numbers).any((i) => {
    return i % 2 === 0 ? true : false;
  });
  const impares = Enumerable.from(numbers).any((i) => {
    return i % 2 === 1 ? true : false;
  });

  let array = [];
  Enumerable.from(numbers).any((i) => {
    if (i % 2 === 1) {
      array.push(i);
    }
  });

  if (pares && impares) {
    // console.log("Existem números pares e impares");
    // console.log(array.join(","));
  } else {
    if (pares) {
      // console.log("Existem somente números pares");
    } else {
      // console.log("Existem somente números impares");
      // console.log(array.join(","));
    }
  }

  var names = ["abracadabra", "allottee", "assessee"];
  // console.log(names.map((e) => e.replace(/(.)\1{1,}/gi, "$1")));
};
