{
  // Array
  const fruits: string[] = ["đ", "đ", "đ"];
  const scores: Array<Number> = [80, 90, 100];

  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ["Sean", 30];
  student[0]; // ę°ëěąě´ ě˘ě§ ěě
  student[1];
  const [name, age] = student; // ë°ě´í°ëĽź ěŹěŠíë ęłłěě ě´ëŚě ę˛°ě í´ě ěŹěŠ ę°ëĽ
}
