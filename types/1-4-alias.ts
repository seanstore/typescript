{
  // Type Alias
  type Text = string;
  const name: Text = "Sean";

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "Sean",
    age: 30,
  };

  // String Literal Type - 값 자체도 타입으로 지정 가능
  type JSON = "json";
  const json: JSON = "json";
}
