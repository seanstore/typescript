{
  // Type Assertion π©
  // λΆκ°νΌνκ² μ¬μ©ν΄μΌνλ κ²½μ°κ° μκΈ΄νλ€. -> 100% μ₯λ΄νλ κ²½μ°μλ§ μ¬μ©νλ€.
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
  numbers!.push(2); // π±

  const button = document.querySelector("class")!;
}
