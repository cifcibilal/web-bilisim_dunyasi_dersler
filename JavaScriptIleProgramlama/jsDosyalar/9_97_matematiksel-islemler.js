// var a = 5;
// var b = 5;
// var islem;

// a--;
// a -= b;
// a /= b;
// a *= b;
// a++;

// islem = a % b;
// islem = a / b;
// islem = a - b;
// islem = a * b;
// islem = a + b;
// documsent.write(a)

// var x = 5;
// var y = 6;

// document.writeln(x==y)
// document.writeln("\n" + x!=y)

function hesapla() {
    var a =parseFloat(document.getElementById("sayi_1").value); 
    var b =parseFloat(document.getElementById("sayi_2").value); 
    var toplam = a + b;
    alert(toplam)
}