{
  // Type Assertion 💩
  // 불가피하게 사용해야하는 경우가 있긴하다. -> 100% 장담하는 경우에만 사용한다.
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😱

  const button = document.querySelector("class")!;
}
