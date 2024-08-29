//8번 : 콜백함수

function data(data, callback){
  console.log("data의 값 : ", data); //출력
  
  callback();
}

function number(){
  console.log("숫자출력");
}

// data("값", number);

//비동기 처리 : 콜백함수는 작업이 완료된 후 호출된다

console.log("start");
setTimeout(() => {
  console.log("콜백함수");
}, 2000);

console.log("end");

//콜백함수의 문제점 : 콜백지옥(callback hell), 복잡한 코드 구조가 발생할 수 있다(콜백의 중첩)
call1(function(result){
  call2(result, function(newResult){
    call3(newResult, function(newResult2){
      call4(newResult2, function(final){
        console.log(final);
      });
    });
  });
});

function call1(callback){
  setTimeout(() => {
    console.log(callback);
    callback("result");
  }, 1000);
}
