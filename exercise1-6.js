// Challenge: Basic Function Exercises
// Exercise 1: Return Value Practice
// ได้เวลาลองเขียน function ที่มีการ return ค่าต่าง ๆ กันแล้ว! สร้าง function ชื่อว่า multiply โดยที่รับ arguments number 2 ตัว และ return ผลลัพธ์ที่คำนวณได้จาก arguments ทั้ง 2 ตัวคูณกัน

function multiply(x , y){
    let result = x * y;
    return result;
}
console.log(multiply(2,3)); // 6
console.log(multiply(9,9)); // 81
console.log(multiply(5,4)); // 20

// เช็กให้ดีว่า function ที่คุณสร้างทำการ return ผลคูณ ไม่ใช่แค่การแสดงผลผ่าน console!

// multiply(2,3) // 6
// multiply(9,9) // 81
// multiply(5,4) // 20


// Exercise 2: isShortsWeather Function
// ตอนนี้ฉันกำลังตัดสินใจว่าสำหรับสภาพอากาศในแต่ละวันฉันควรจะใส่กางเกงขาสั้น หรือขายาว คุณช่วยฉันตัดสินใจโดยการสร้าง function ชื่อว่า isShortsWeather หน่อยนะ
 

function isShortsWeather(temp){
    if(temp >= 75){
        return true;
    }else{
        return false;
    }
}

console.log(isShortsWeather(80)); //true
console.log(isShortsWeather(48)); //false
console.log(isShortsWeather(75)); //true


// ซึ่ง function นี้จะต้องรับ argument number หนึ่งตัว ซึ่งเราจะขอเรียกว่า temperature (แต่จริง ๆ แล้วคุณสามารถตั้งชื่อว่าอะไรก็ได้นะ)
// ถ้า temperature มีค่ามากกว่าหรือเท่ากับ 75 ต้องทำการ return ค่า true
// แต่ถ้าเป็นกรณีอื่น ๆ ต้องทำการ return ค่า false 

// isShortsWeather(80) //true
// isShortsWeather(48) //false
// isShortsWeather(75) //true
// Exercise 3: Last Element Exercise
// อยากให้คุณช่วยสร้าง function ชื่อว่า lastElement ซึ่ง function นี้จะมีการรับ argument array 1 ตัว และ function นี้ จะต้อง return ค่าของตัวสุดท้ายของ array นั้น ๆ ( โดยห้ามลบ element ที่อยู่ใน array นะ ) แต่ยังไงก็ตาม ถ้า array นั้นว่างเปล่า function ของคุณก็จะต้อง return null

function lastElement(arr){

    if(arr.length == 0){
        console.log(null);
        return null
    }else if (arr.length != 0){
        console.log(arr[arr.length-1])
        return arr[arr.length-1];
    }
}

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null
// Exercise 4: Capitalize Exercise
// สร้าง function ชื่อว่า capitalize ซึ่งรับ argument string 1 ตัว และ return ค่าของ string ตัวนั้นที่ตัวอักษรตัวแรกเป็นตัวใหญ่ (แต่ตัวอักษรตัวอื่น ๆ จะเป็นเหมือนเดิม) ยกตัวอย่างเช่น:

function capitalizeStr(arr){
   let firstLetter = arr.charAt(0);
   let firstLetterCap = firstLetter.toUpperCase();
   let remainingLetter = arr.slice(1)
   let capitalizeWord = firstLetterCap + remainingLetter
   console.log(capitalizeWord);
   return capitalizeWord
    
}

capitalizeStr('eggplant') // "Eggplant"
capitalizeStr('pamplemousse') // "Pamplemousse"
capitalizeStr('squid') //"Squid"


// Exercise 5: Sum Array Exercise
// เขียน function ชื่อว่า sumArray โดยที่ function นี้จะรับ argument array 1 ตัว (เป็น array ที่เก็บตัวเลข) และ function นี้จะต้องสามารถ return ผลลัพธ์ของการบวกเลขทุกตัวที่อยู่ใน array นั้น ๆ ให้ได้

function sumArray (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum);
    return sum
}


sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101
// Exercise 6: Days of The Week Exercise
// สร้าง function ชื่อว่า returnDay โดยที่ function นี้จะต้องรับ argument 1 ตัว (ตัวเลขตั้งแต่ 1-7) และ function นี้จะต้อง return ค่าของวันนั้นในสัปดาห์ (1 คือ Monday, 2 คือ Tuesday, etc.) แต่ถ้าตัวเลขนั้นมีค่าน้อยกว่า 1 หรือมากกว่า 7 function นี้จะต้อง return null ในข้อนี้จะกำหนดให้วันที่ 1 หรือวันแรกเป็นวันจันทร์

function returnDay(arr){
    let day = arr

    if(day < 1 || day > 7){ 
        return console.log(null);
    }else if(day == 1){
        return console.log("Monday");
    }else if(day == 2){
        return console.log("Tuesday");
    }else if(day == 3){
        return console.log("Wednesday");
    }else if(day == 4){
        return console.log("Thursday");
    }else if(day == 5){
        return console.log("Friday");
    }else if(day == 6){
        return console.log("Saturday");
    }else if(day == 7){
        return console.log("Sunday");
    }

}


returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null
