//5번

console.log(true || true);
console.log(false || false);
console.log(true && false);
console.log(!true);

console.log("cat" || "dog", typeof "cat" || "dog"); //cat
console.log(false || "dog"); //dog
console.log("dog" || false); //dog
console.log("dog" || true); //dog

console.log(null || undefined);

//truthy값 : 불리언 컨텍스트에서 true로 평가되는 값(조건문에서 참으로 간주)
//falsy 값 : 불리언 컨텍스트에서 false로 평가되는 값
// false, 0, "", null, undefined, NaN
if([]){
  console.log([]);
}
if({}){
  console.log({});
}
if(""){
  console.log("");
}
if(Infinity){
  console.log(Infinity);
}
