오늘의 우주사진
=

NASA API를 이용한 오늘의 우주사진을 보여주는 웹

설치방법
-
파일을 다운로드 한 뒤
```
yarn install
```
을 통해 node_modules를 설치

config/index.js를 만들어 줍니다.
API key는 [이곳](https://api.nasa.gov/index.html#apply-for-an-api-key)에서 받을 수 있습니다.
```
const cfg = {
    key: ""//자신의 api key
}

export default cfg
```

```
yarn start
```

미리보기
-
[이곳](https://WonYoungYun.github.io/react-space)에서 결과물을 확인하실 수 있습니다.
