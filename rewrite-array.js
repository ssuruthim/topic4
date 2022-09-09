
// // // function myPush(array , value)
// // {
// // var length=array.length;

// // // array[length] = value;

// // return array;
// // }
// // a = myPush(a, 10)
// // // console.log(a);

// var a = [1,2,2,3];


// function myPop(array)
// {
//     newarray = [];
//     for(let i=0;i<array.length;i++){
//     newarray[i]=array[i];
//     }
//     return newarray;
// }
//  a= myPop(a);
//  console.log(a);

//  var a =['2','3','4'];
// var b =["a","b","c"]

//  function Concat(array , array1)
//  {
//    newarray = [];
//    var c =array.length;
//    for(let i=0;i<=array.length;i++)
//    {
//       newarray[i]=array[i];

//    }

//    for(let j=0;j<=array1.length;j++)
//    {
// newarray[c] = array1[j];
// c++;
//    }
//    return newarray;
//  }
//  var g = Concat(a,b);
//  console.log(g);

// var a = ["a","b","c"];
// function shift(array)
// {
//    newarray = [];
//     for(let i=1;i<array.length;i++){
//     newarray[i]=array[i];
//     }
//     return newarray;
// }
//  var h =shift(a);
//  console.log(h);

// var a = ["a","b","c"]
//  function unshift(array , value)
// {
//   newArray=[]
//   var index =1;
//   for(i=0;i<array.length;i++)
//   {
//     newArray[index]=array[i];
//     index++
//   }
// newArray[0]=value;
// return newArray
// }
// var x = unshift(a,"b");
// console.log(x)
// let a =[1,2,3,4,5]
// function slice(array, start, end )
// {
//     newArray=[]
//     let index =0;
//     for(i=start;i<end;i++)
//     {
//         newArray[index]=array[i]
//         index++
//     }

//     return newArray
// }
// var g = slice(a,1,4)
// console.log(g);
// var a =["a","b","c","d"];
// function reverse(array){
// newarray=[];
// var x =0;
// for(i=array.length-1;i>=0;i--)
// {
// newarray[x]=array[i]
// x++

// }
// return newarray
// }
// var g = reverse(a);
// console.log(g);

// var a =["a","b","c","d"]
// function  fill(array , startvalue,endvalue,value)
// {


//    for(i=startvalue;i<endvalue;i++)
//    { 
// array[i]=value;
// 
//    }
// return array
// }
// var g=fill(a ,0,3 ,"r");
// console.log(g);
var a = ["a", "b", "c", "d"];
// var x = myIncludes(a, "b",2);
// console.log(x);
// function myIncludes(array, value ,index) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == value&&i==index) {
//             return true;

//         }

//     }
//     return false;

// }
var x = splice(a,3,0,"o")
console.log(x);
function splice(array , start,end,value)
{
   newarray=[];
   index=0;
   for(let i=0;i<start;i++)
   {
    newarray[index]=array[i];
    index++
   }
//    index++
   newarray[index]=value;
index++
   for(let j = start;j<array.length;j++)
   {
    
    newarray[index]=array[j]
index++

   }
   for(let j = start;j<array.length-end;j++)
   {
    
    newarray[index]=array[j]
index--

   }
return newarray

}
