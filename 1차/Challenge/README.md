1. 도커파일 작성

FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE 4000

CMD ["npm", "run", "start"]

2. 명령어를 이용한 이미지 빌드 및 컨테이너 실행

docker build ./

docker run -p 4000:3000 imageName