# React_Redux_Typescript_Redux-saga

🧑🏻‍💻이 네가지를 프로처럼 사용하는 방법을 알아봅시다.

> fork를 해서 PR(Pull Request를 날리시면 이 코드에 기여를 하실 수 있습니다.)

[바로가기 링크](https://hong-junhyeok.github.io/React_Redux_Typescript_Redux-saga/)

# 예제 종류

![image](https://user-images.githubusercontent.com/48292190/112724594-74d56180-8f57-11eb-9584-b66c7e75bc1c.png)
![image](https://user-images.githubusercontent.com/48292190/112724600-7a32ac00-8f57-11eb-8ec2-ede243b39f1b.png)

# JsonPlaceholder API 사용하는 방법

JsonPlaceholder는 API fetch의 연습용 서버이므로, 헤더에 엑세스 토큰을 전달해 줄 필요가 없다.

# Github API 사용하는 방법

BASE_URL + /users/ + USER_NAME

headers -> Setting에서 얻은 token의 값을 전달해줘야 함.

![image](https://user-images.githubusercontent.com/48292190/112719938-f240a800-8f3e-11eb-9ba1-a013b13d7332.png)

```typescript
import axios from 'axios';
import { GITHUB_SERVER,GITHUB_ACCESS_TOKEN } from 'config/config.json';

...
axios.get(`${GITHUB_SERVER}/users/${username}`,{
    headers : {
        Authorization : `Basic ${GITHUB_ACCESS_TOKEN}`
    }
})
```

이런 형식으로 사용하면 된다.
