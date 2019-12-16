for(var i = 1; i < 10; i++){
    for(var j = 1; j < 10; j++){
        document.write(i + " x " + j + " = " + i*j);
        document.write("</br>");
    }
    document.write("</br>");
}

/* arrays */
var scores = [60, 40, 10, 78, 45, 17, 23];
console.log(scores[2]);
console.log(scores[0]=50);
console.log(scores.length); /* returns the length of the array */
console.log(scores.push(100)); /* adauga un element la coada listei */
console.log(scores.pop); /* sterge ultimul element */
console.log(scores.unshift(10)); /* adauga un element pe prima pozitie */
console.log(scores.shift); /* sterge elementul de pe prima pozitie */