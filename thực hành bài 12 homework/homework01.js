// EX04
// let arr = [2,4,5,6,8,9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// alert(`Tong cac so la: ${sum}`);

// EX05
// let arr = [2,4,5,6,8,9];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<min){
//         min = arr[i];
//     } 
// }
// alert(`So nho nhat la: ${min}`);

// EX06
// let arr = [2,4,5,6,8,9];
// let number = prompt("Nhập vào một giá trị:");
// let check = false;
// let index = arr.indexOf(number);
// for (let i = 0; i < arr.length; i++) {
// if (number===arr[i]){
//     check = true;
//     break;
// }    
// }
// if(check && index !=-1){
//     alert(`${number} duoc tim thay trong array tai index ${index}`);
// }
// else{
//     alert(`${number} khong tim thay trong array`); 
// }

// EX07
let arr = [5,7,300,90,24,50,75];
let month = [1,2,3];
   // 
   console.log("Xin chào, đây là kích thước đàn cừu của tôi:");
   console.log(arr);
   // 
   let max = arr[0];
   for (let i = 0; i < arr.length; i++) {
       if(arr[i]>max){
           max = arr[i];
       }  
   }
   console.log(`Con cừu lớn nhất của tôi có kích thước ${max}, hãy cạo nó `);
   // 
   let index = arr.indexOf(max);
   arr[index] = 8;
   console.log("Sau khi cạo lông, đây là đàn cừu của tôi:");
   console.log(arr);
//    
for (let i = 0; i < month.length; i++) {
// 
for (let i = 0; i < arr.length; i++) {
   arr[i] = arr[i] + 50; 
}
console.log(`MONTH ${month[i]}`);
console.log("Đã một tháng trôi qua, bầy cừu của tôi đã lớn, đây là kích thước của chúng");
console.log(arr);
// 
let maxOne = arr[0];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>maxOne){
        maxOne = arr[i];
    }  
}
console.log(`Bây giờ con cừu lớn nhất của tôi có kích thước ${maxOne}, hãy cạo nó `);
// 
let indexOne = arr.indexOf(maxOne);
arr[indexOne] = 8;
console.log("Sau khi xén lông, đây là đàn cừu của tôi:");
console.log(arr);  
}
// 
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];  
}
console.log(`Đàn của tôi có tổng kích thước là ${sum}`);
let money = sum * 2;
console.log(`Tôi sẽ lấy ${money}`);






