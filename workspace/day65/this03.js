const data1 = {
  x : 100,
  getX : function (num){
    return num + this.x;
  },
};

console.log(data1.getX("값 : "));

const data2 = {x : 10};
console.log(data1.getX.call(data2, "값 : "));
//data1의 getX 메소드를 호출, this를 data2 객체로 지정해서 출력
console.log(data1.getX.apply(data2, ["값 : "]));
//data1의 getX 메소드를 호출, 인수를 배열로 전달하여 출력

let arr1 = [1,2,3];
let arr2 = [...arr1, 4,6,7,];

console.log(arr2);

