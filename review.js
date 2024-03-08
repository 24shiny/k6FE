// four ways to copy an array
let arr = ['peanut',1,'apple',10];
let arr_1 = [];
let arr_2 = [];
let arr_3 = [];
let arr_4 = [];
let arr_5 = [];
let arr_6 = [];

//1 copy method
arr_1 = [...arr];
//2 for of
for(let c of arr){
    arr_2.push(c);
}
//3 map
arr_3 = arr.map((v)=>{
    return v;
})
//4 map with index
arr_4 = arr.map((v,i)=>{
    return '['+i+']'+v;
})

//isNaN(sth) checks whether sth is a number or not 
//it returns false when it is a number. NaN(Not a Number)
for(let item of arr){
    if(!isNaN(item)) arr_5.push(item);
}
//filter true cases
arr_6 = arr.filter((v)=>isNaN(v)); 

//map and filter functions are only for arrays
//in order to apply them to objects, their keys or values need to be concerned
//A dictionary is to Python, an object is to javaScript
let obj = {'math':20, 'history':40, 'french':5};
console.log(obj)
console.log(obj['french']) //access a value by its key

//object can be dissolved into keys and values
//use Object.entries(obj_name)
for(let items of Object.entries(obj)){
    console.log("keys :", items[0]);
    console.log("values :", items[1]);
}
//alternatively, use Object.keys(obj_name) & Object.keys(obj_name)
console.log(Object.keys(obj));
console.log(Object.values(obj));

//certainly, one can access its values by their corresponding keys
//for example,
let arr5 = Object.keys(obj).map(k=>k+obj[k]);
console.log(arr5)


