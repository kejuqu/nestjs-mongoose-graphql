# base image
FROM node:16.20.2

# need check it
WORKDIR /company/projects

# copy current all into container WORKDIR
COPY ./ ./

# install pnpm in container
RUN npm install -g pnpm

# install dependencies for the project
RUN pnpm install

# build RUN pnpm run build  => RUN: pnpm run start:prod
CMD [ "pnpm", "run","dev" ]