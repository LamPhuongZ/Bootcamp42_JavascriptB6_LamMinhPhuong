// Bài tập 1: Tìm số chẵn / lẻ nhỏ hơn 100
document.getElementById("btn-shownumber").onclick = function () {
    let numberEven = 0; // số chẵn
    let numberOdd = 0; // số lẻ

    for (let index = 0; index < 100; index++) {
        if (index % 2 === 0) {
            numberEven = numberEven + index + " ";
        }
        else {
            numberOdd = numberOdd + index + " ";
        }
    }

    // Hiển thị kết quả
    document.getElementById("result-shownumber").style.display = "block";
    document.getElementById("result-b1").innerHTML = "=> Số chẵn: " + numberEven + "<br><br> => Số lẻ: " + numberOdd;
};
// Kết thúc bài tập 1

// Bài tập 2: Đếm số chia hết cho 3
document.getElementById("btn-show").onclick = function () {
    let count = 0;

    for (let index = 0; index < 1000; index++) {
        if (index % 3 === 0) {
            count++;
        }
    }

    // Hiển thị kết quả
    document.getElementById("result-show").style.display = "block";
    document.getElementById("result-b2").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
};
// Kết thúc bài tập 2

// Bài tập 3: Tìm số nguyên dương nhỏ nhất
document.getElementById("btn-search").onclick = function () {
    let sum = 0; // sum: chứa tổng
    let i = 0; // i: là bước nhảy

    while (sum < 10000) {
        i++;
        sum += i;
    }

    // Hiển thị kết quả
    document.getElementById("result-search").style.display = "block";
    document.getElementById("result-b3").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
};
// Kết thúc bài tập 3

// bài tập 4: Tính tổng
document.getElementById("btn-sum").onclick = function () {
    let numberX = +document.getElementById("numberx").value;
    let numberN = +document.getElementById("numbern").value;

    let LUYTHUA = 1;
    let sum = 0;

    for (let index = 1; index <= numberN; index++) {
        LUYTHUA = LUYTHUA * numberX;
        sum += LUYTHUA;
    }

    // Hiển thị kết quả
    document.getElementById("result-sum").style.display = "block";
    document.getElementById("result-b4").innerHTML = "Tổng: " + sum;
};
// Kết thúc bài tập 4

// Bài tập 5: Tính giai thừa
document.getElementById("btn-calc").onclick = function () {
    let number01 = document.getElementById("number01").value;
    let result = 1;

    for (let index = 1; index <= number01; index++) {
        result = result * index;
    }

    // Hiển thị kết quả
    document.getElementById("result-calc").style.display = "block";
    document.getElementById("result-b5").innerHTML = "Giai thừa: " + result;
};
// Kết thúc bài tập 5

// Bài tập 6: Tạo thẻ div
document.getElementById("btn-div").onclick = function () {
    let numberEven = "Div chẵn";
    let numberOdd = "Div lẻ";
    let content = "";

    for (let index = 1; index <= 10; index++) {
        if (index % 2 === 0) {
            content += '<div style = "background: red; color: white; padding: 5px">' + numberEven + '</div>';
        }
        else {
            content += '<div style = "background: blue; color: white; padding: 5px">' + numberOdd + '</div>';
        }
    }

     // Hiển thị kết quả
     document.getElementById("result-div").style.display = "block";
    document.getElementById("result-b6").innerHTML = content;
};
// Kết thúc bài tập 6

// Bài tập 7: In số nguyên tố
// hàm kiểm tra số nguyên tố
function checkPrime(prime) {
    var flag = true;

    if (prime < 2) {
        flag = false;
    }
    else if (prime === 2) {
        flag = true;
    }
    else if (prime % 2 === 0) {
        flag = false;
    }
    else {
        for (let index = 3; index <= Math.sqrt(prime); index += 2) {
            if (prime % index === 0) {
                flag = false;
                break;
            }
        }
    }

    return flag;
}

document.getElementById("btn-print").onclick = function () {
    let prime = +document.getElementById("prime").value;
    let result = "";

    for (let index = 1; index <= prime; index++) {
        if (checkPrime(index)) {
            result += index + " ";
        }
    }

    // Hiển thị kết quả
    document.getElementById("result-print").style.display = "block";
    document.getElementById("result-b7").innerHTML = result;
};
// Kết thúc bài tập 7