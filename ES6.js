/*
    Từ khóa khai báo biến: var, let, const. Phân biệt
    + Phạm vi hoạt động
        var: trên toàn bộ scope (dâu đóng mở ngoặc nhọn)
        let: trong các scope khác nhau nếu khai báo biến cùng tên thì các biến sẽ phân biệt.
            . Lưu ý trong cùng 1 scope không thể khai báo chung 1 biến
            => Trong ES6 dung let thay thế cho var
        const: Giống như let tuy nhiên giá trị nó không thể gán lại. Đối với object và array khi khai báo là const thì không thể gán =object và array mới được àm chỉ cso thể đổi giá trị của thuộc tính hoặc phần bê ntrong của chúng
    + Cơ chế hosting tức là khai báo tự động cho biết (chỉ hổ trợ var , let và const không được hỗ trợ)

*/

// Ví dụ về const
// Khi khai biến const thì viết hoa

const OBJECT = {
    token: "advs-frjf-dfvff"
}

// không thể gán OBJECT thành OBJECT mới
// OBJECT = {} : sai 

// Nhưn có thể thay đổi giá trị bên trong OBJECT
OBJECT.token = "abc-xyz"
console.log(OBJECT)


//==============================================================================================================================================
// PHẦN 2: ARROW FUNCTION : dùng để khai báo hàm không hô trợ khai báo lớp đối tượng 
console.warn('Phần 2')
//==============================================================================================================================================

// //es5
// function showMess () {
//     console.log('Hello Cybersoft')
// }

// //es6 
// let showMess = () => {
//     console.log('Hello Cybersoft')
// }
// Khai báo ngăn gọn với hàm có 1 đối số và 1 return
// ------------------------------------

// //es 5
// function showMess2 (name) {
//     return 'hello' + name
// }

// //es6 
// let showMess2 = name => 'hello' + name



//==============================================================================================================================================
// PHẦN 3: CON TRỎ THIS HAY CONTAXT HAY NGỮ CẢNH CON TRỎ THIS
console.warn('Phần 3')
//==============================================================================================================================================


// window: tất cả những gì hiển thị trên màn hình
// document: tất cả tập tin html

// Lấy chiều dài và chiều rronogj của màn hình hiện tại
console.log(window.innerWidth)
console.log(window.innerHeight)

console.log(window)
console.log(document)


/**
    + Mặc định: this sẽ trỏ về window
    + trong OBject: this sẽ là object đó
        vd: let hocvien = {
            tenHV: "nguyan van a"
            tuoi: 20
            hienThiThongTin = function () {
                console.log('Ten hoc vien: ', this.tenHV)
            }
        }
        hocvien.hieThiThongTin()

    + trong function (thường sử dụng cho prototype hay lớp đối tượng) thì this sẽ là function đó
        vd: let hocvien = {
            tenHV: "nguyan van a"
            tuoi: 20
            hienThiThongTin = function () {
                function hienThi() {
                    console.log('Ten hoc vien: ', this.tenHV) // Lúc này this không tìm tấy ngữ cảnh sẽ trỏ về window
                }
            }
        }
        hocvien.hieThiThongTin()
    
        => trong trường hợp trên this sẽ hiểu là function  (this sẽ hiểu theo ngũ cảnh gần nhất)

        => trong trương hợp trên muốn this hiểu là object thì function sẽ chuyển về arow function:
            vd: let hocvien = {
                tenHV: "nguyan van a"
                tuoi: 20
                hienThiThongTin = function () {
                    let hienThi = () => {
                        console.log('Ten hoc vien: ', this.tenHV) // Lúc này this không tìm tấy ngữ cảnh sẽ trỏ về window
                    }
                }
            }
            hocvien.hieThiThongTin()
        
        => Nếu muốn chuyển toàn bề biên dịch về ES6 thì trong thẻ <script> đổi type="module" 
    

    + Các trường hợp khai báo bên dưới là như nhau
    var maso = 123;
    window.maso = 123
    maso= 123
    console.log(maso)

 */



//==============================================================================================================================================
// PHẦN 4: DEFAULT PARAMETER
console.warn('Phần 4')
//==============================================================================================================================================

let getUserInfo =  (name =  "Sĩ", age = 18) => {
    if (age > 0 && age < 20) {
        console.log(`${name}, bạn còn rất trẻ`)
    } else {
        console.log(`${name}, bạn già rồi`)
    }
} 

getUserInfo("Tuấn", 30);
getUserInfo("Hoàng", 15);
// Khi không truyền tham số sẽ lấy tham số mặc định
getUserInfo();


//==============================================================================================================================================
// PHẦN 5: REST PARAMETER
console.warn('Phần 5')
//==============================================================================================================================================
/**
Overload: hàm chồng => những hàm trùng tên với nhau khác số lượng tham số hoặc khác kiểu dữ liệu (C++, Java, C#,...)
Javascript: không hỗ trợ khái niệm trên

 */

function tinhTong(a,b){
    return a+b;
}

function tinhTongRest (...restParam) { // Lưu dữ liệu dưới dạng mảng
    switch (restParam.length){
        case 2: {
            // Xử lí khi có 2 tham số 
            return restParam[0] + restParam[1];
        }
        case 3: {
            // Xử lí khi có 3 tham số 
            return restParam[0] + restParam[1] + restParam[2];
        }
        default: return 'Tham số không hợp lệ'
    }
} 


let kq1 = tinhTongRest(5,4);
let kq2 = tinhTongRest(5,4,10);
let kq3 = tinhTongRest(5,4,10,20,30);

console.log('Tổng của 2 tham số:',kq1);
console.log('Tổng của 3 tham số:',kq2);
console.log('Tonoge của 5 tham số:',kq3);


//==============================================================================================================================================
// PHẦN 6: SPREADOPERATOR
console.warn('Phần 6')
//==============================================================================================================================================

let num1 = 5;
let num2 = num1;
num2 = 10;
console.log('num1', num1); // => num1 = 5
console.log('num2', num2); // => num2 = 10

/**
 * => Khi thay đổi num2 sẽ không ảnh hưởng đến num1
 */



let hocVien1 = {ma:1, ten: "Nguyễn Văn A"}

let hocVien2 = {ma:2, ten: "Nguyễn Văn B"}

hocVien2 = hocVien1;

console.log('Tên Học Viên 1: ', hocVien1.ten); // => Nguyễn Văn A
console.log('Tên Học Viên 2: ', hocVien2.ten); // => Nguyễn Văn A

/**
 * => Đối tượng, mảng không lưu theo dạng: 1 objct/array trong 1 ô nhớ. Mà object/array lưu theo dạng đưa thông tin vào từng ô nhớ và lưu lại vị trí của từng ô nhớ đó
 * 
 * => Ví Dụ: cho 1 mảng animals = ['tiger', 'lion', 'bee']. # con vật bên trong mảng sẽ lưu trong ba ô nhớ khác nhau và có 3 mã vùng nhớ số khác nha
 *          + tiger => lưu vào ô sô 0 => mã: 000
 *          + lion => lưu vào ô sô 1 => mã: 001
 *          + bee => lưu vào ô sô 2 => mã: 002
 * 
 * => Thông tin mảng động vật sẽ được lưu dưới dạng aniamls = [000, 001,002]
 * 
 * => Quay trở lại ví dụ trên, khi gán hocVien2 = hocVien1 thì hocVien2 sẽ lấy toàn bộ mã vùng nhớ của hocVien1 gán qua
 */


/**
 * => Để khác phục tình trạng trê sẽ dùng spreadoperator
 */

let hocVien3 = {...hocVien1};

/**
 * => Lúc này trên trên thanh ram sẽ cấp thêm vùng nhớ cho hocVien3 với các giá trị giống với hocVien1 chứ không lấy toàn bộ vung nhớ của họcVien1
 */

/**-------------------------------------------------------------------------------
 * => ĐẶT VẤN ĐỀ 1: Nếu muốn thay đổi giá tri trong mảng thì làm như thế nào ?
 * -------------------------------------------------------------------------------
 * 
 * => Truong hợp này thì thay dổi "ma: 3" cho hocVien3 chứ không muốn dùng "ma: 1" ở họcVien1
 * 
 * => Cần ghi đè giá trị cho hocVien3 như sau:
 */
hocVien3 = {...hocVien3,ma:3}
console.log('Học Viên 3:',hocVien3)

/**-------------------------------------------------------------------------------
 * => ĐẶT VẤN ĐỀ 2: Nếu một Object có nhiều cấp thì làm cần làm gì để thay đổi thuộc tính bên trong?
 * => Là cần truy xuất vào từng thuộc tính công để thay đổi
 * -------------------------------------------------------------------------------
*/
let object1 = {
    thuocTinh1: {
        id: 123,
        name: 'Cybersoft'
    }
}
console.log('Object1: ', object1);
let object2 = {... object1};
object2.thuocTinh1.name = 'Cybersoft B08E';
console.log('object2 sau khi thay đổi', object2)

//==============================================================================================================================================
// PHẦN 7: DESTRUCTURING (Bóc tách phần tử)
console.warn('Phần 7')
//==============================================================================================================================================
// Lây thông tin của nhieeug tham số trong mảng băng cách gọp các thông số vào một biết. Cách làm này ngắn gon hơn so với es5

let sanPham = {
    id: 123,
    name: "Iphone12",
    price: 500,
}

// Để lấy ra thông tin của đối tượng sản phẩm

// es5
// let id = sanPham.id;
// let name = sanPham.name;
// let price = sanPham.price;

//es6
let {id, name, price} = sanPham
console.log('id:', id);
console.log('name:', name);
console.log('price:', price);


// Một cách chỉ lấy ra một số thông tin
// let {id, ... restParam} = sanPham


//==============================================================================================================================================
// PHẦN 8: OBJECT LITERAL (Objct chân phương)
console.warn('Phần 8')
//==============================================================================================================================================
// Dự vào tên biến sẽ tự ra tên thuộc tính 


// ES5
// let lophoc = "bc098e"
// let hienthilophoc = function () {
//     console.log('Hien thi thong tin lop hoc')
// }
// let thongTinLopHoc = {
//     maLop : 1,
//     lopHoc: lopHoc,
// }

// ES6
let lophoc = "bc098e"
let hienthilophoc = function () {
    console.log('Hien thi thong tin lop hoc')
}
let thongTinLopHoc = {
    lophoc,
    maLop : 1,
    hienthilophoc,
}

console.log('Thông tin lớp học', thongTinLopHoc)


//==============================================================================================================================================
// PHẦN 9: DYNAMIC KEY
console.warn('Phần 9')
//==============================================================================================================================================

// Cho phép truyền động thuộc tính 

var key_id = 'Mã sản phẩm iphone vừa được cập nhật';
var key_year = "Năm sản xuất"

let iphone = {
    [key_id]: 1,
    name: 'iphone11',
    price: 500
}

// Truyenf động theo spreadoperator
iphone = {...iphone, [key_year]: 2020}

console.log('Thông tin iphone',iphone)


//==============================================================================================================================================
// PHẦN 10:FOR-IN & FOR-OF
console.warn('Phần 10')
//==============================================================================================================================================

let arrProduct = [
    {
        id: 1,
        name: 'iphoneX',
        price: 500,
        img: 'https://picsum.photos/200/300'
    }, 
    {
        id: 2,
        name: 'iphone11',
        price: 600,
        img: 'https://picsum.photos/200/300'
    }, 
    {
        id: 3,
        name: 'iphone12',
        price: 700,
        img: 'https://picsum.photos/200/300'
    }
]

// for of: Mỗi lần duyệt lấy ra 1 object => duyêt cho đến hết mảng
for ( let product of arrProduct) {
    console.log('Vòng lặp for-of',product);
}

// for in : mỗi lần duyêt lấy ra index của mảng
for (let index in arrProduct) {
    let product = arrProduct[index];
    console.log('Vòng lặp for-in', product)
}
//---------------------------------------------
// Sự thât, nếu dùng for-in để duyệt index của mảng thì phí

// Công dụng tối ưu của for in là duyệt key của dối tượng
//---------------------------------------------

let iphone12 = {
    ma: 123456,
    ten: "IPHONE12",
    gia: 1000,
    hangSanXuat: 'Apple'
}

console.log('Hiển thị giá trị của từng thuộc tính trong object iphone12');
for (let key in iphone12){
    // Key là tên thuộc tính của mỗi lần duyệt
    // để lấy value của object đó thì object[key]
    console.log(key,':',iphone12[key])
}

console.log('Hiển thị giá trị của từng thuộc tính trong object arrResult');
let arrResult = {
    'dgfgfhfbc': {
        id: 120,
        name: 'iphoneXSMAX',
        price: 500,
        img: 'https://picsum.photos/200/300'
    }, 
    'djgksljgsd': {
        id: 130,
        name: 'iphone11PROMAX',
        price: 600,
        img: 'https://picsum.photos/200/300'
    }, 
    'ytyuicvckj':{
        id: 140,
        name: 'iphone12PRO',
        price: 700,
        img: 'https://picsum.photos/200/300'
    }
}

for (let key in arrResult) {
    console.log(key)
    let product = arrResult[key];
    console.log('Sản phẩm: ',product);
}

// ----------------------------------------------
// Dùng for hoặc for of để duyệt mảng

// Dùng for in để duyệt object
//-----------------------------------------------



//==============================================================================================================================================
// PHẦN 11:IMPORT & EXPORT & EXPORT DEFAULT 
console.warn('Phần 11')
//==============================================================================================================================================
// Không cần chèn đoạn script vào file index nhưng vẫn có thể liên kết thông tin giữa các file js với nhau


// export default chỉ được export default một lần cho mỗi file js

import {DOMAIN, USER_LOGIN} from "./setting/setting.js";

// Nếu import từ export default thì có thể đặt tên bất kỳ và trong tên không chưa dấu ngoặc {}
import DOMAIN_API from "./setting/setting.js"

console.log('Domain import từ file setting: ',DOMAIN);
console.log('User import từ file setting: ',USER_LOGIN);
console.log('Domain import từ export default: ',DOMAIN_API);


