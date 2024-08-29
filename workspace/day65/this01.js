let obj = {result : 0};
obj.add = function (a, b) {
  console.log(this);
  this.result = a + b;
  console.log(this);
};

obj.add(10, 20);
console.log(obj);