// 비동기 함수 정의
function call1(callback) {
  setTimeout(() => {
    console.log("Call 1");
    callback("call1");
  }, 1000);
}

function call2(result, callback) {
  setTimeout(() => {
    console.log("Call 2", result);
    callback("call2");
  }, 1000);
}

function call3(result, callback) {
  setTimeout(() => {
    console.log("Call 3", result);
    callback("call3");
  }, 1000);
}

function call4(result, callback) {
  setTimeout(() => {
    console.log("Call 4", result);
    callback("final result");
  }, 1000);
}

// 콜백 함수 체이닝
call1(function(result) {
  call2(result, function(newResult) {
    call3(newResult, function(newResult2) {
      call4(newResult2, function(final) {
        console.log("Final result:", final);
      });
    });
  });
});