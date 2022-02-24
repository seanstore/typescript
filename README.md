# typescript

## Official Web Sites

- [TypeScript](https://www.typescriptlang.org/)

## TIL

> Today I Learned

- [타입스크립트](TIL/타입스크립트.md)

## TypeScript Project

### Setup

1. `sudo npm i -g typescript`
2. `tsc -v`
3. `tsc main.ts -w`
4. `sudo npm i -g ts-node` -> 타입스크립트의 변환 과정을 자동화하여 즉시 실행하게 도와주는 툴
5. `ts-node main.ts`

### 다수의 파일을 실시간으로 컴파일하기 위한 Setup

1. `tsc --init` -> tsconfig.json
2. `tsc -w`
3. `"outDir": "./build"`

- 타입스크립트 파일과 자바스크립트 파일을 분리해두기 위한 설정
- 컴파일 결과로 생성된 자바스크립트 파일이 저장되는 경로를 설정한다.
- 최상위에 있는 타입스크립트 파일을 기준으로 폴더 구조가 반영되어진다.
  - 최상위의 기준을 변경하려면 `"rootDir": "./src"`
  - `rootDir` 밖으로는 타입스크립트 파일을 생성할 수 없다.

4. `"compilerOptions": {...}`와 같은 레벨에 `"exclude": ["./src/dev.ts"]`를 추가하여 컴파일에서 제외시킬 파일을 설정할 수 있다.
5. 마찬가지로 `"include": ["./src/dev.ts"]`를 추가하여 원하는 파일만 컴파일하도록 설정할 수 있다.

### 브라우저에서 타입스크립트 파일을 디버깅하기 위한 Setup

1. `"sourceMap": true`로 설정하여 .map 파일을 생성하면 된다.
