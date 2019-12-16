var code = 0;

while (code < 256) {
    document.write(code + " " + String.fromCharCode(code)); /* instructiunea asta transforma codul in string */
    document.write("</br>");
    code++;
}

for (var c = 0; c < 1024; c++) {
    document.write(c + " " + String.fromCharCode(c)); /* instructiunea asta transforma codul in string */
    document.write("</br>");
}

for(i=0, j=10, u=25; i<20 && j<30 && u>15; i+=2, j+=4, u--) {
    console.log("i:" + i + " j:" + j + " u:" + u);
} 