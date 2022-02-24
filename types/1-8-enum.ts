{
  // Enum - 관련된 상수값을 관리할 수 있음
  // JavaScript
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const today = DAYS_ENUM.WEDNESDAY;

  // TypeScript
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
  }
  console.log(Days.Wednesday);
  let day: Days = Days.Tuesday;
  day = 100; // 타입이 정확히 보장되지 않는다.
  console.log(day);

  // Enum은 Union Type으로 대체 가능하다.
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfWeek: DaysOfWeek = "Monday";
}
