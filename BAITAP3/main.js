function myCount(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);  

    var even = 0;
    var odd = 0;


    if(num1 % 2 == 0){
        even++;
    }else{
        odd++;
    }

    if(num2 % 2 == 0){
        even++;
    }else{
        odd++;
    }

    if(num3 % 2 == 0){
        even++;
    }else{
        odd++;
    }

    document.getElementById("txtBtn").innerHTML = "Có " + even + " số chẵn " + "," + odd + " số lẻ";
}



document.getElementById("btnCount").onclick = myCount;