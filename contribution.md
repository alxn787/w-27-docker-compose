## manual installation
-install nodejs locally
-clone the repo
-run npm install
-start the db locally
    - run docker run -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
    - or get an instance from neon.tech
-change env and upload your credentials
-npx prisma migrate dev
-npx prisma generate
-npm run build
-npm run start

## Docker installation
- install docker
- Start a network
    - docker network create mynetwork
- Start postgres
    - docker run --network=mynetwork --name postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
- build the docker image
    - docker build --network=host -t user .
- run the docker image
    - docker run --network=mynetwork -e DATABASE_URL="postgresql://postgres:mysecretpassword@postgres:5432/postgres" -p 3000:3000 user

## Docker compose installation
- install docker, docker-compose
- run docker-compose up