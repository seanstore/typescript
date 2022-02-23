{
  // number
  const num: number = 0;

  // string
  const str: string = "";

  // boolean
  const bool: boolean = false;

  // undefined
  let age: number | undefined;
  age = undefined;
  age = 30;

  // null
  let person: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "strange";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "strange";
  anything = true;

  // void
  function print(): void {
    console.log("hi");
    return;
  }

  // never
  function throwError(message: string): never {
    throw new Error(message);
    // 또는 while (true) {}
  }

  // object 💩
  let obj: object;
  obj = { name: "Sean" };
  obj = [1, 2, 3];
}
