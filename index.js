// qiuz 1
let nums ="123";
console.log(+"123"+7);


//quiz 2
/*let number =0;
if(number == 0)
{
    console.log("Invalid");
}
else{
    console.log(`no`)
}*/

// quiz 3
/*let print =[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<print.length; i++)
{
    if(print[i]%2===0 )
    {
        continue;
    }
else
    {
 console.log(print[i]);
}

}*/


//quiz 4
/*let numbers =[1,2,3,4,5];
let final=numbers.filter((ele)=>{
    return ele%2 ==0;
})
console.log(final);*/

//quiz 5

/*let num1=[1,2,3];
let num2=[4,5,6];
 let nums = num1.concat(num2);
 console.log(nums);*/

//quiz 6

 /*let day = 2;
switch(day)
{
    case 1 :
        console.log(`sunday`);
        break;


 case 2 :
        console.log(`Monday`);
        break;


 case 3 :
        console.log(`onday`);
        break;
case 4 :
        console.log(`sunday`);
        break;


 case 5 :
        console.log(`sunday`);
        break;


 case 6 :
        console.log(`sunday`);
        break;

 case 7 :
        console.log(`saturday`);
        break;

default:

    console.log("check again please");
}*/

//quiz 7
/*let nums= ["a","ab","abc" ];
let test =nums.map(( ele)=>
{
    return ele.length;
})
console.log(test);*/


//quiz 8
/*let num = [15];
let check= num.map(function(ele)
    {
if(num% 3==0)
    {
    if( num% 5==0)
  {
    console.log(" Divisible by both");
  }
  else {
    console.log( "num is not divisible by 5");
       }
}
   else {
    console.log( "num is not divisible by 3");

    }
});
 
 console.log(check);*/


 //حل اخر لسؤال التامن 
 /*function check ( nums)
 {
    return nums%3 ==0? nums%5==0?"div" : "not2"  : " not1" ;
 }

console.log( check(15));*/


//quaiz 9

/*let square = (num)=> num**2 ;
console.log(square(5));*/


//qauiz 10
 /*const person ={
    name: `John`,
    age:25,
    say : function (){
    return`${person.name} is ${person.age} years old`;
  },
 }   ; 
 console.log(person.say());*/


  //qauiz 11
  /*function sum(...number)
  {
   result=0
   for(let i=0;i<number.length;i++)

    { 
        result+=number[i]
    }
    return result
  }
 console.log( sum(1,2,3,4,5));*/


//QZ  12
/* 
setTimeout(()=>
{
console.log("Success")
},3000)*/


//qauiz 13
   /* let large = [1,3,7,2,4];

   let test= large.filter(function(ele)
 
{for(let i=0;i<large.length;i++){
     if(large[i]>large.length)
{
   console.log(large[i]);
}
else{
   continue

}
}});
console.log(test);*/


// QZ 14
//qauiz 14 
 
 /* let yourName = {

    name:`John`,
    age :30,
   }
   for(let key in yourName ){
   console.log(key)};
 

result.push(yourName);
 console.log(result);*/
//======
/*
let result=[];
 let yourName = {

    name:`John`,
    age :30,
   }
   for(let key in yourName ){
   console.log(key)};
 result.push();
console.log(result);*/

//=====

 /*let yourName = {

    name:`John`,
    age :30,
   }
   for(let key in yourName ){
   console.log(key)};

let result=yourName.split("").map((ele)=>
{
  console.log(key);
}).join("");
console.log(result);*/



//qauiz 15

/*let n="The quick broken fox";
let y =n.split(`""`).filter((ele)=>
{
    return(ele)
}      
);
console.log(y)*/

//part2###

//Qz 1
//forEach>> مش بتستني الكود يحمل وبيطلع array  فاضي[]
//   for of >> بتستني الكود يحمل وبيطلع arrayفيها elements 

//QZ 2
// hosting: بيرفع declartion لفوق الكود 
// example :
// var num;
// num = 10;
// console.log(num);
//DTZ : هي المساحه الميته
// example :  
// if(false)
// {
    // console.log(5)
// }
//  كود  مش هيتنفذ بس حاجز مساحه  دا كدا يبقي مساحه ميته


//QZ 3
/*=== : بتقارن value و typeof
== : بتقارن value  
*/

//QZ 4
//  try _catch >> هي الطريقه بستخدمها ف لغه تاجافسكربت علشان تكشف اخطاء الكود و باقي الكود يشتغل عادي 
// try >> بحط فيها الجزء اللي شاكك فيه
// catch >> بتطلع الجزء اللي فيه الخطا وتمنعه


 // QZ 5
//coercion :  بيحول البيانات من نوع لاخر اثناء  تشتغيل الكود و بتعمله لغه الجافاسكربت لوحدها 
 //let يبوظ باقي الكود 
//  بستخدمه : لان الاخطاء فيها كتير ولان لو مستخدمتهوش وحصل اي الخطا هيضرب ف الكود كله
// num1 = "5";
// let num2 =3;
//console.log(num1+num2);
// conversion>> انا اللي بعمل تحويل ف البيانات بايدي
// let y = "4"
// let a=Number(y)
// console.log(a)
