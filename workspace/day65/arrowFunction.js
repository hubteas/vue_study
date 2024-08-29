//4) 화살표 함수

//일반함수
function addNum(a, b){
  return a + b;
}

//익명함수
const test1 = function (a, b){
  return a + b;
};

//화살표함수
const test2 = (a, b) => {
  return a + b;
};
const test3 = (a, b) => a + b;

console.log(test1(10, 20));
console.log(test2(1, 2));
console.log(test3(5, 2));