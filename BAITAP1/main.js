function mySort() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    if((num1 > num2 && num1 > num3) && (num2 < num3)){   
        document.getElementById("txtBtn").innerHTML = "Dãy số thu được là: " + num2 + "<" + num3 + "<" + num1;
    }else if((num1 > num2 && num1 > num3) && (num2 > num3)){
        document.getElementById("txtBtn").innerHTML = "Dãy số thu được là: " + num3 + "<" + num2 + "<" + num1;
    }else if((num2 > num1 && num2 > num3) && (num1 > num3)){
        document.getElementById("txtBtn").innerHTML = "Dãy số thu được là: " + num3 + "<" + num1 + "<" + num2;
    }else if((num2 > num1 && num2 > num3) && (num1 < num3)){
        document.getElementById("txtBtn").innerHTML = "Dãy số thu được là: " + num1 + "<" + num3 + "<" + num2;
    }else if((num3 > num1 && num3 > num2) && (num1 < num2)){
        document.getElementById("txtBtn").innerHTML = "Dãy số thu được là: " + num1 + "<" + num2 + "<" + num3;
    }else{
        document.getElementById("txtBtn").innerHTML = "Dãy số thu được là: " + num2 + "<" + num1 + "<" + num3;
    }
}

document.getElementById("btnSort").onclick = mySort;
