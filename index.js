// //1
// function betweenFiveAndTen(num){
//   if(num > 10){
//     return false
//   }else if(num < 5){
//       return false
//   }else{
//       return true
//   }
// }
// console.log(betweenFiveAndTen(5))
//2
// function betweenTenAndThirty(num){
//   if(num > 30){
//       return false
//     }else if(num < 10){
//       return false
//     }else{
//         return true
//     }
// }
// console.log(betweenTenAndThirty(11))
//3
// function betweenThirtyAndFifty(num){
//   if(num <= 50 && num >= 30){
//       return true
//   }else{
//       return false
//   }
// }
// console.log(betweenThirtyAndFifty(45))

//4
function betweenThirtyFiftySeventy(num){
  if(num <= 50 && num >= 30){
       return true
}else if(num <= 70 && num >= 50){
       return true
}else{
    return false
}
}
console.log(betweenThirtyFiftySeventy(50))
//5
function betweenTwentyFiftySixty(num){
   if(num <= 20 && num >= 0){
       return true
}else if(num <= 60 && num >= 50){
       return true
}else{
    return false
}
}

console.log(betweenTwentyFiftySixty(45))
//6
function betweenTenTwentyThirty(num){
    if(num <= 10 && num >= 0){
       return true
}else if(num <= 30 && num >= 20){
       return true
}else{
    return false
} 
}
console.log(betweenTenTwentyThirty(45))