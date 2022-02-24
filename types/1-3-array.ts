{
  // Array
  const fruits: string[] = ["🍎", "🍌", "🍉"];
  const scores: Array<Number> = [80, 90, 100];

  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ["Sean", 30];
  student[0]; // 가독성이 좋지 않음
  student[1];
  const [name, age] = student; // 데이터를 사용하는 곳에서 이름을 결정해서 사용 가능
}
