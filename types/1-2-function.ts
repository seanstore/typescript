{
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  function fetchNum(id: string): Promise<Number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(`${firstName} ${lastName}`);
  }
  printName("Sean"); // undefined를 명시해서 전달해주지 않아도 된다.
  printName("Steve", "Jobs");

  // Default Parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage(); // default message

  // Rest Parameter
  function addNumbers(...nums: number[]) {
    return nums.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
