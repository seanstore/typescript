{
  // 숫자만 가능
  function checkNotNullNumber(arg: number | null): number {
    if (arg === null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result1 = checkNotNullNumber(123);

  // 타입이 보장되지 않음
  function checkNotNullAny(arg: any | null): any {
    if (arg === null) {
      throw new Error("not valid!");
    }
    return arg;
  }
  const result2 = checkNotNullAny("abc");

  // 유연하고, 타입이 보장되며, 재사용성이 뛰어나다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error("not valid!");
    }
    return arg;
  }
  const result3: number = checkNotNull(123);
  const result4: string = checkNotNull("abc");
}
