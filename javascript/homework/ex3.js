var margin = "#";
var center = "0";

for(var h = 0; h<10; h++) {
    for (var w = 0; w<20; w++) {
        if (h == 0 || h == 9) {
            document.write(margin);
        } else if (w == 0 || w == 19) {
            document.write(margin);
        } else {
            document.write(center);
        }
    }
    document.write("</br>");
}