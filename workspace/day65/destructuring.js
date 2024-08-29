//3) 구조 분해할당
//ES6에서 도입된 기능, 배열이나 객체의 속성값을 개별 변수에 간단하게 할당할 수 있게 
//해주는 기능
//코드의 가독성을 높이고, 변수할당과정을 더 간결하게 만들어 준다

//배열 구조 분해할당
const fruits = ["사과", "파인애플", "복숭아", "자두"];
console.log(fruits);

const [first, second, third] = fruits;
console.log(first);
console.log(second);

//객체에서 구조 분해 할당

const person = {
  name : "김영선",
  age : 20,
  subject : "web"
};

//객체 구조 분해할당은 객체의 속성이름을 기준으로 값을 할당, 
//속성이름을 다르게 하고 싶다면 별칭을 줄 수 있다
const {name : fullname, age: 나이, subject} = person;
// console.log(name);
// console.log(age);

console.log(fullname);

console.log(person.age);
console.log(person['age']);

//함수 파라미터에서의 구조 분해할당
//객체나 배열을 인자로 받아서 특정값만 사용하고자 할 때 유용하다
function introduce({name, age, subject}){
  console.log(`제 이름은 ${name}이고 나이는 ${age}살입니다. 
    지금은 ${subject}개발 수업을 듣고 있습니다.`);
}

const st1 = {
  name : "짱구",
  age : 20,
  subject : "web"
};

introduce(st1);
