// EX01: Cho người dùng nhập vào chuỗi số bất kì. Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// input: 2,3,5,4,1
// output: 1,2,3,4,5

// function sapxep(){
//     let input = prompt("Nhap vao chuoi so bat ki");
//     let arr = input.split(",")
//     let number = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if(arr[i]>arr[j]){
//                 number = arr[j];
//                 arr[j] = arr[i]
//                 arr[i] = number;
//             }
//         }   
//     } 
//     return arr;
// }
// console.log(sapxep());

// EX02: Viết một hàm nhận một chuỗi làm đối số và trả về độ dài của chuỗi.
// input: "Hello World"
// output: 11

// function length(){
//     let input = prompt ("Nhập vào một chuỗi bất kì");
//     let dodaichuoi = input.length;
//     return dodaichuoi;
//     }
//     console.log(length());

    // Bài 3: Viết một hàm nhận một mảng các chuỗi làm đối số và trả về mảng mới chứa các chuỗi viết hoa.
    // input: "thịnh"
    // output: "THỊNH"

    // function chuInHoa(){
    //     let input = prompt ("Nhập vào một chuỗi bất kì");
    //     let inHoa = input.toUpperCase();
    //     return inHoa;
    //     }
    //     console.log(chuInHoa());

// Bài 4: Viết một hàm nhận một chuỗi làm đối số và trả về chuỗi mới với các từ đảo ngược thứ tự.
// input: "Khanh"
// output: "hnahK"

// function daonguoc(){
//         let input = prompt ("Nhập vào một chuỗi bất kì");
//         let dayDaoNguoc = input.split('').reverse().join('');
//         return dayDaoNguoc;
//         }
//         console.log(daonguoc());
   

// Bài 5: Viết một hàm nhận một mảng các số làm đối số và trả về mảng mới chỉ chứa các số nguyên tố.
// input: 1,2,3,4,5,6,7,8
// output: 2,3,5,7
let input = prompt("Nhập các số cho mảng");
    let arr = input.split(",");
    let arrOut = [];
function checkSoNguyen(n) {
    let check = 1;
    if(n<2){
                check= 0;
            }
    else{
                for (let i = 2; i <= n; i++) {
                    if(n%i===0){
                        check = 0;
                        break;
                    }       
            }
        }
        return check;
 }
 for (let i = 0; i < arr.length; i++) {
    if(checkSoNguyen(arr[i] = 1)){
        arrOut.push(+arr[i]);
    }
    
 }
 checkSoNguyen(input);
 console.log(arrOut);

