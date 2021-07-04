// BÀI TẬP 1: THÔNG BÁO ĐẾN NGƯỜI DÙNG SÔ ĐƯỢC CLICK
console.warn('Bài tập 1')
//----------------------------------------------------------------------------------------------------------
let arrbutton = document.querySelectorAll('button')
for (let i = 0; i < arrbutton.length; i++){
    let button = arrbutton[i];
    button.onclick = function () {
        alert(button.innerHTML)
    }
}

// BÀI TẬP 2: THÔNG BÁO ĐẾN NGƯỜI DÙNG SÔ ĐƯỢC CLICK
console.warn('Bài tập 2')
//----------------------------------------------------------------------------------------------------------
/**
    1/ Từ mảng in ra giao diện mảng màu
    2/ định nghĩa sự kiện click cho nút button
 */
let arrColor = ["red", "green", "purple", "pink", "blue", "black", "yellow"]
let  xuatRabutton =  (soluong, array) => {
    var ketqua = "";
    for ( var i = 1; i < soluong ; i++) {
        var  button = `<button class="btn-color" style="width:100px; height: 50px; background-color:${array[i]}; text-transform: uppercase; border:none; font-weight: bold; color: #fff">${array[i]}</button>`;
        ketqua += button;
    }
    document.getElementById('arrButton').innerHTML = ketqua;

    // Dom đến thẻ button vừa render
    let buttonColor = document.querySelectorAll('.btn-color')
    for (let i = 0; i < buttonColor.length; i++){
        let btn = buttonColor[i];
        btn.onclick = function () {
            console.log(btn.innerHTML)
            document.getElementById('house-icon').style.color = `${btn.innerHTML}`
            document.getElementById('house-icon').style.fontSize = "100px"
        }
    }
}
let ketqua = xuatRabutton(arrColor.length, arrColor)

// BÀI TẬP 3: TÍNH ĐIỂM TRUNG BÌNH BẰNG RESTPARAM
console.warn('Bài tập 3')
//----------------------------------------------------------------------------------------------------------
function diemTB (... restParam) {
    let diemTB = 0;
    let sum = 0;
    if (restParam.length == 3){
        for (let i = 0; i < restParam.length; i++) {
            sum += Number(restParam[i])
        }
        return diemTB = (sum/3).toFixed(2);
    } else if (restParam.length == 4){
        for (let i = 0; i < restParam.length; i++) {
            sum += Number(restParam[i])
        }
        return diemTB = (sum/4).toFixed(2);
    } else {
        return 'Thông tin nhập vào không hợp lệ'
    }
}

function layDiem (selector, sectionRender){
    let arrDiem = document.querySelectorAll(selector);
    let diem = [];
    for (let i = 0; i < arrDiem.length; i++){
        let input = arrDiem[i];
        let {value} = input;
        diem = [...diem, value]
    }
    let diemRender = diemTB(... diem)
    document.querySelector(sectionRender).innerHTML = diemRender

}

document.querySelector('#btn-tinhDiem1').onclick = function () {
    layDiem("#form-khoi1 .form-group input", '#diemTBKhoi1');
}
document.querySelector('#btn-tinhDiem2').onclick = function () {
    layDiem("#form-khoi2 .form-group input", '#diemTBKhoi2');
}


// BÀI TẬP 3: LẤY THÔNG TIN NGƯỜI DÙNG NHẬP VÀO BẰNG ES6
console.warn('Bài tập 4')
//----------------------------------------------------------------------------------------------------------
/**
    1/ Từ mảng in ra giao diện mảng màu
    2/ định nghĩa sự kiện click cho nút button
 */
document.getElementById('btnXacNhan').onclick = function () {
    let arrInput = document.querySelectorAll('form input, form select');

    let nhanVien = {}

    for (let  i = 0; i < arrInput.length; i++) {
        // Mỗi làn duyệt lấy ra 1 phần từ 
        let input = arrInput[i];
        let {id, value} = input;
        nhanVien = {...nhanVien, [id]:value}
    } 
    console.log('Nhân viên', nhanVien);
    console.log('arrInput', arrInput)

    let content = ``;
    for (let key in nhanVien) {
        content += `<tr><td>${key}</td><td>${nhanVien[key]}</td></tr>`
    }
    console.log(content)
    document.querySelector('#tblnhanVien').innerHTML = content
}

