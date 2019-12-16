var n = 0;
while(n++ < 5) { /* mai intai se verifica conditia (cu valoarea numarului inainte de incrementare), dupa care se incrementeaza */
    console.log(n);
    n += 1; /* se adauga 1 la n, este echivalentul lui n=n+1, in loc de 1 putem avea si alte numere */
}
while(++n < 5) { /* aici mai intai va creste valoarea lui n, abia apoi se verifica conditia */
    console.log(n);
}