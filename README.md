# React-Query

react-query의 기본 개념은 [react-query](https://velog.io/@jkl1545/React-Query)를 통해 익힐 수 있다.

---

- [isLoading vs isFetching](#isloading-vs-isfetching)

---

> ## isLoading vs isFetching

`isLoading`은 `캐시된 데이터가 없으며, 처음 실행되는 쿼리`에 따라 boolean 형태를 나타내주고
`isFetching`은 `비동기 함수가 해결됬는지 안됬는지 여부`에 따라 boolean 형태를 나타내준다.

즉, `첫 번째 쿼리를 가져올 때 isLoading은 true -> false`로 변환되고,  
`캐시 유무에 상관없이 데이터가 요청 중일 때 isFetching은 true -> false`로 변환된다.
