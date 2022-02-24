interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!");
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 리턴하는 함수는 💩
function pay(employee: Employee): Employee {
  employee.pay();
  return employee; // 세부 클래스의 정보를 잃어버린다.
}

const kim = new FullTimeEmployee();
const lee = new PartTimeEmployee();
kim.workFullTime();
lee.workPartTime();

const kimAfterPay = pay(kim);
const leeAfterPay = pay(lee);
// kimAfterPay.workFullTime();
// leeAfterPay.workPartTime();

// -------------------------------------------------------
function payGood<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}
const kimAfterGoodPay = payGood(kim);
const leeAfterGoodPay = payGood(lee);
kimAfterGoodPay.workFullTime();
leeAfterGoodPay.workPartTime();

// -------------------------------------------------------
const obj = {
  name: "Sean",
  age: 30,
};
const obj2 = {
  animal: "🐕",
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name"));
console.log(getValue(obj, "age"));
console.log(getValue(obj2, "animal"));
