# React_Redux_Typescript_Redux-saga

๐ง๐ปโ๐ป์ด ๋ค๊ฐ์ง๋ฅผ ํ๋ก์ฒ๋ผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ์์๋ด์๋ค.

> fork๋ฅผ ํด์ PR(Pull Request๋ฅผ ๋ ๋ฆฌ์๋ฉด ์ด ์ฝ๋์ ๊ธฐ์ฌ๋ฅผ ํ์ค ์ ์์ต๋๋ค.)

[๋ฐ๋ก๊ฐ๊ธฐ ๋งํฌ](https://hong-junhyeok.github.io/React_Redux_Typescript_Redux-saga/)

# ์์  ์ข๋ฅ

![image](https://user-images.githubusercontent.com/48292190/112724594-74d56180-8f57-11eb-9584-b66c7e75bc1c.png)
![image](https://user-images.githubusercontent.com/48292190/112724600-7a32ac00-8f57-11eb-8ec2-ede243b39f1b.png)

# JsonPlaceholder API ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ

JsonPlaceholder๋ API fetch์ ์ฐ์ต์ฉ ์๋ฒ์ด๋ฏ๋ก, ํค๋์ ์์ธ์ค ํ ํฐ์ ์ ๋ฌํด ์ค ํ์๊ฐ ์๋ค.

# Github API ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ

BASE_URL + /users/ + USER_NAME

headers -> Setting์์ ์ป์ token์ ๊ฐ์ ์ ๋ฌํด์ค์ผ ํจ.

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

์ด๋ฐ ํ์์ผ๋ก ์ฌ์ฉํ๋ฉด ๋๋ค.
