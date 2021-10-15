function myTriangle() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    if (num1 == num2 && num3 == num2) {
        document.getElementById("txtBtn").innerHTML = "Hình tam giác đều";
    } else if (num1 == num2 || num1 == num3 || num3 == num2) {
        document.getElementById("txtBtn").innerHTML = "Hình tam giác cân";
    } else if (num1 * num1 == (num2 * num2 + num3 * num3) || num2 * num2 == (num1 * num1 + num3 * num3) || num3 * num3 == (num1 * num1 + num2 * num2)) {
        document.getElementById("txtBtn").innerHTML = "Hình tam giác vuông";
    } else {
        document.getElementById("txtBtn").innerHTML = "Không thuộc loại nào";
    }
}
document.getElementById("btnTriangle").onclick = myTriangle;
