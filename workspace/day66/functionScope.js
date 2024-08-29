//6번 : 함수 스코프

function test1(){
  let subject = "javascript";
  let date = "240829";
  function test2(){
    let job = "학생";
    console.log("test2함수", job);
    console.log("test2함수", subject);
    console.log("test2함수", date);
  }
  test2();
  // console.log(job);
  console.log(subject);
  console.log(date);
}

test1();