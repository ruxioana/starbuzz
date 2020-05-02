try {
    let x= y;
    let n = 1;
    n.toPrecision(200);
    n.toUpperCase();
    // console.logg('This should not happen.'); /* eroare fatala, moare script-ul, nu se mai citeste dupa eroare */
    // console.log('Do we see this message?'); /* nu se va executa dupa eroare */
    throw TypeError('I threw this error'); /* putem genera noi insine diverse erori */
} catch (error) {
    console.log('Type: ' + error.name);
    console.log('Error message: ' + error.message);
}