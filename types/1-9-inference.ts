{
  // Type Inference
  function print(message = "hello") {
    console.log(message);
  }
  print("bye");

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);

  // 타입은 정확하게 명시하는 것이 좋다.
  // 스타일 가이드가 필요하다.
}
