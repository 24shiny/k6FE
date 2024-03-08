let n1 = 10; //int
console.log(n1);

let n2 = 10.5; //float
let s1 = "moin";

for(let c of s1){
    console.log(c);
}

for(let i in s1){
    console.log(s1[i]);
}

let arr = ['🍕', 10, '🍔',];
console.log(arr);
console.log(arr[0]);

for(let c of arr){
    console.log(c);
}

for(let i in arr){
    console.log(arr[i]);
}

// create arr1
let arr1 = [0,0,0,0,0,0,];
for(let i in arr){
    arr1[i] = arr[i];
}
// create arr
let arr5 = [];
console.log("arr2 : ", arr5);

for(let item of arr){
    arr5.push(item);
}
console.log("by the for loop : ", arr5);

// map function for arrays
const arr2 = arr.map((v,i) => {
    console.log(v); // equivalent to "for of", yet recommended to use
    console.log(i); // values first, indices afterwards
    return v+"🧀";
})
console.log(arr2);

// call back function
// when getting one parameter and using no commands inside the function,
const arr3 = arr.map(v => v+"🍥");
// const arr3 = arr.map((v) => v+"🍥");
// const arr3 = arr.map((v,i) => v+"🍥"+i);
console.log(arr3);

let obj = {'🍙':2, '🥠':6,};
console.log(obj);
console.log(obj['🍙']);

for(let c of Object.entries(obj)){ // Object.keys(obj), Object.values(obj)
    console.log("obj's key",c[0]);
    console.log("obj's value",c[1]);
}

//alternatively,
for(let [k,v] of Object.entries(obj)){
    console.log("obj's key",k);
    console.log("obj's value",v);
}

for(let i in obj){
    console.log(obj[i]);
}

console.log(Obejct.keys(obj));
console.log(Object.values(obj));

let arr4 = Object.keys(obj).map( k => k+obj[k]);