//3번
const subject = ['java', 'dbms', 'javascript', 'html', 'css', 'git'];
const subjectCopy1 = subject;
const subjectCopy2 = [...subject];

// console.log(subject, typeof subject);
// console.log(subjectCopy1, typeof subjectCopy1);
// console.log(subjectCopy2, typeof subjectCopy2);

//전개 구문으로 복사시에는 원본 변경 x
// subjectCopy2.pop();
// console.log(subjectCopy2, typeof subjectCopy2);
// console.log(subject, typeof subject);

//원본 변수를 그대로 복사하면 원본도 같이 변경 o
// subjectCopy1.pop();
// console.log(subjectCopy1, typeof subjectCopy1);
// console.log(subject, typeof subject);

//Array.from : 복사한 값만 삭제
const number = [1, 3, 2, 7, 4];
const numberCopy = Array.from(number);
console.log(number);
console.log(numberCopy);

numberCopy.pop();
console.log(number);
console.log(numberCopy);

//slice : 복사한 값만 삭제
const number1 = [1, 3, 2, 7, 4];
const numberCopy1 = number1.slice();
numberCopy1.pop();
console.log(number1);
console.log(numberCopy1);

