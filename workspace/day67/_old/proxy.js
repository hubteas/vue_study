// 1번 : proxy

//대상 객체
const target = {name : "김영선", age : 20};

//proxy핸들러 객체
const handler = {
  get : function (target, prop, reciver){
    console.log(`접근한 속성 : ${prop}`);
    return target[prop];
  },

  set : function(target, prop, value){
    console.log(`할당한 속성 : ${prop}, 값 : ${value}`);
    return true;
  },
}

//proxy 생성
const proxy = new Proxy(target, handler);

// console.log(target);
// console.log(handler);

// console.log(proxy);

//Proxy를 통한 속성 접근
console.log(proxy.name);

// Proxy를 통한 속성 할당
proxy.age = 10;
console.log(proxy.age);

//proxy는 대상 객체의 속성에 접근하거나 값을 할당할 때 핸들러의 트랩을 통해 동작을 수정하며
// 이를 통해 객체의 동작을 제어할 수 있다
// vue3 개발시에는 Proxy객체를 직접 생성하지 않아도 된다
// vue 인스턴스를 생성하면 자동으로 지정된 객체에 대해 내부적으로 Proxy 객체로 래핑하는 작업을 자동으로 수행한다