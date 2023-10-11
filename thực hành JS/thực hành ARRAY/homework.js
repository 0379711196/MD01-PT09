// EX01: Tính tổng các phần tử trong mảng
// let arrNumber = [3,5,7,9];
// let sum = 0;
// for (let i = 0; i < arrNumber.length; i++){
//         sum = sum + arrNumber[i];
// }
// console.log(sum);

// EX02: Tìm phần tử lớn nhất trong mảng
// let arrNumber = [3,5,7,9];
// let max = arrNumber[0];
// for (let i = 0; i < arrNumber.length; i++){
//     if (arrNumber[i]>max){
//       max = arrNumber[i];
// }
// }
// console.log(`Phần tử lớn nhất là: ${max}`);

// EX03: Tìm phần tử nhỏ nhất trong mảng
// let arrNumber = [3,5,7,9];
// let min = arrNumber[0];
// for (let i = 0; i < arrNumber.length; i++){
//     if (arrNumber[i]<min){
//       min = arrNumber[i];
// }
// }
// console.log(`Phần tử lớn nhất là: ${min}`);

// EX04: Kiểm tra xem phần tử có tồn tại trong mảng hay không
// Cách 1:Không sử dụng hàm có sẵn
// let arrNumber = [3,5,7,9];
// let number = prompt("Nhập vào một giá trị:");
// let check = false;
// for (let i = 0; i < arrNumber.length; i++){
//      if (number === arrNumber[i]){
//       check = true;
//       break;
// }
// }
// if(check){
// console.log(true);
// }
// else{
// console.log(false);
// }
// Cách 2: Sử dụng hàm có sẵn
// let arrNumber = [3,5,7,9];
// let number = prompt("Nhập vào một giá trị:");
// for (let i = 0; i < arrNumber.length; i++){
//   if(arrNumber.includes(number)) {
//   console.log("true");
// }
// else{
// console.log(false);
// }
// }

// EX05: Đảo ngược giá trị trong mảng
// let arrNumber = [1, 2, 3, 4, 5];
// arrNumber.reverse();
// console.log(arrNumber);

// EX08:  Sắp xếp lại mảng theo giá trị tăng dần
// let arrNumber = [4, 2, 9, 5, 1];
// arrNumber.sort(function(a,b))
//  return a - b;


// EX06:Lọc các phần tử chẵn trong mảng:
// let arrNumber = [4, 2, 9, 5, 1];
// let arrOne = [];
// for (let i = 0; i < arrNumber.length; i++){
// if (arrNumber[i]%2==0){
// arrOne.unshift(arrNumber[i])
// }
// }
// console.log(arrOne);

// EX07:  Tìm số lần xuất hiện của một phần tử trong mảng
let arrNumber =[1, 2, 3, 2, 4, 2, 5];
let number = prompt("Nhập vào một giá trị:");
let count = 0;
for (let i = 0; i < arrNumber.length; i++){
if (arrNumber[i]==number){
count++;
}
}
console.log(count);