//7번 : 즉시실행함수
(function(name) { 
  console.log("즉시실행함수");
  console.log(name + "입니다");
})("김영선");

//파라미터 기본값(default value) ES6에서 추가된 기능
function sum(num1=10, num2){
  const result = num1 + num2;
  console.log(result);
}

sum(1, 2);
sum(1); // NaN