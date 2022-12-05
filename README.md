# vue3-test

> vue3 기반 테스트 코드를 짜 보자!

## Project setup

```sh
yarn install
```

### Compiles and hot-reloads for development

```sh
yarn serve
```

### Compiles and minifies for production

```sh
yarn build
```

### Run your unit tests

```sh
yarn test:unit
```

### Lints and fixes files

```sh
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## 1. Jest? Vue Test Utils?

- Jest 는 페이스북에서 만든 자바스크립트 테스팅 라이브러리이다.
- Vue 파일을 SFC 로 사용하고 있고, 이것은 뷰 로더로 해석되어 최종으로 변환되기 때문에, 제스트에도 이렇게 뷰 로더처럼 변환해 주는 무언가가 필요하다.
- Vue Test Utils는 위의 문제를 해결해 줄 수 있는, Vue 공식 단위 테스트 유틸리티 라이브러리이다.

## 2. 기본적인 API

1. describe
   1. 여러개의 test 코드를 하나의 테스트 작업 단위로 묶어 주는 API 이다.  
      테스트 케이스를 하나의 그룹으로 묶어 주는 역할을 한다.
2. test, it
   1. 테스트 코드를 돌리기 위한 API 이다. 하나의 테스트 케이스를 의미한다.
3. expect
   1. 테스트 할 대상을 넣는 API 이다. expect 에는 주로 테스트 입력 값이나 기대 값을 넣는다.
4. toBe
   1. 테스트의 결과를 확인하는 API 이다. 테스트의 예상 결과 값을 넣는다.
5. beforeEach
   1. 테스트 파일의 각 테스트 코드가 돌기 전에 수행할 로직을 넣는 API이다. 테스트 케이스마다 반복되는 로직을 넣기에 적합하다.

## 3. shallowMount, mount

- 기본적으로 new Vue 하여 뷰 인스턴스를 생성하고 $mount API 를 호출해서 테스트를 할 수 있다.
- 하지만 매번 이 작업을 하기에는 번거로우므로, vue test util 에서 제공하는 함수로 이 반복 작업을 하지 않을 수 있다.
- shallowMount
  - 테스트 할 컴포넌트의 기능만 테스트하고 하위 컴포넌트와는 분리해주는 테스트 API 이다.
- mount
  - 테스트 할 컴포넌트의 하위 컴포넌트의 동작까지 함께 테스트 하는 API 이다.

## 기타 참고사항

1. 테스트 코드와 컴포넌트 파일이 같은 폴더 상에 있으면 편하다.
   1. jest.config.js 파일을 수정하여 src 내의 test 코드가 있으면 테스트 코드가 작동하도록 만들 수 있다.
2. test, it 함수의 첫번째 인수는 동사로 시작하는 것이 좋다. 또한 문법이 맞게끔 하여 말이 되게 작성하는 것이 테스트 후에 확인하기에 좋다.
3. 관심사의 분리만 잘 되어있다면, 테스트 코드를 짜기에 수월하고, 또한 관심사의 분리가 잘 되어있다면 테스트 코드만으로 해당 역할 파악이 수월하다.
