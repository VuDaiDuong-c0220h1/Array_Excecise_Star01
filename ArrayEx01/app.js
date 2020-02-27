let array = [-5, -20, 8, 99, 40, 15, -20.5, 46, 78, -40];

//Hiển thị các số lớn hơn 10
let result01 = [];
for (i = 0; i < 10; i++) {
    if (array[i] > 10) {
        result01.push(array[i]);
    }
}
document.getElementById("result01").innerHTML = "Các số lớn hơn 10 là: " + result01.toString();

//Hiển thị số lớn nhất
array.sort(function (a, b) {
    return a - b
});
document.getElementById("result02").innerHTML = "Số lớn nhất là: " + array[array.length-1].toString()
    + " ở vị trí thứ: " + array.length + "<br/>"
    + "Mảng hiện tại là: " + array.toString();

//Tính trung bình
let result02 = 0;
for (i = 0; i< 10; i++) {
    result02 += array[i]
}
document.getElementById("result03").innerHTML = "Trung bình của các số trong mảng là: " + (result02/array.length);

//Đảo ngược
array.reverse();
document.getElementById("result04").innerHTML = "Hàm đảo ngược: " + array.toString();

//Đếm số nguyên âm
let result03 = [];
let countnegative = 0;
for (i = 0; i < 10; i++) {
    if (array[i] < 0) {
        if (parseInt(array[i]) === array[i]) {
            result03 += array[i];
            countnegative++
        }
    }
}
document.getElementById("result05").innerHTML = "Các số nguyên âm là: " + result03.toString()
    + " .Có " + countnegative + " số.";

//Kiểm tra số nguyên có trong mảng hay k
function showResult() {
    let inputnum = parseFloat(document.getElementById("inputnum").value);
    if (array.indexOf(inputnum) !== -1 ) {
        document.getElementById("result06").innerHTML = "Số: " + inputnum + " có trong mảng. Vị trí số: " + (array.indexOf(inputnum)+1);
    } else {
        document.getElementById("result06").innerHTML = "Số " + inputnum + " không ở trong mảng.";
    }
}

//Kiểm tra và xóa số nguyên có trong mảng
function showResult01() {
    let inputnum01 = parseFloat(document.getElementById("inputnum01").value);
    let position = array.indexOf(inputnum01);
    if (position !== -1 ) {
        array.splice(position,1);
        document.getElementById("result07").innerHTML = "Mảng mới: " + array.toString();
    } else {
        document.getElementById("result07").innerHTML = "Số " + inputnum01 + " không ở trong mảng.";
    }
}

//Sắp xếp thứ tự giảm dần
array.sort(function (a, b) {
    return b -a;
});
document.getElementById("result08").innerHTML = "Mảng được sắp xếp theo thứ tự giảm dần là:" + array.toString();

//Nối mảng
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let c = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39 ,40];
let d = [];
d = a.concat(b);
for (i = 0; i <20; i++) {
    c[i] = d[i];
}
document.getElementById("result09").innerHTML = "Mảng C mới là: " + c ;