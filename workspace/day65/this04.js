let add = function(x, y){
  this.result = x + y;
};

let obj = {};

//1) bind() 메소드 사용
// add = add.bind(obj);
// add(3, 10);
// console.log(obj);

//2) apply() 메소드 사용
add.apply(obj, [5, 10]);
console.log(obj);

//3) call() 메소드 사용
add.call(obj, 7, 7);
console.log(obj);