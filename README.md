# React-Query

react-query의 기본 개념은 [react-query](https://velog.io/@jkl1545/React-Query)를 통해 익힐 수 있다.

---

- [staleTime vs cacheTime](#staletime-vs-cachetime)
- [isLoading vs isFetching](#isloading-vs-isfetching)

---

> ## staleTime vs cacheTime

staleTime은 `쿼리를 만료시키기 까지 걸리는 시간`이며,  
cacheTime은 쿼리가 `inactive 상태일 때 캐싱된 상태로 남아있는 시간`이다.

❗️staleTime을 3초로 설정했다면 3초 동안은 `fresh`한 상태로 남아있기 때문에 data refetching이 일어나지 않는다.

❗️cacheTime을 5초로 설정했다면 해당 컴포넌트가 `unmount`되는 시점에서부터 5초 후에는 캐싱된 쿼리는 삭제된다.

> ## isLoading vs isFetching

`isLoading`은 `캐시된 데이터가 없으며, 처음 실행되는 쿼리`에 따라 boolean 형태를 나타내주고
`isFetching`은 `비동기 함수가 해결됬는지 안됬는지 여부`에 따라 boolean 형태를 나타내준다.

즉, `첫 번째 쿼리를 가져올 때 isLoading은 true -> false`로 변환되고,  
`캐시 유무에 상관없이 데이터가 요청 중일 때 isFetching은 true -> false`로 변환된다.
