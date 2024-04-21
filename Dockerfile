# Setup image
FROM node:18-alpine

WORKDIR /usr/src/app

# Install package manager
RUN npm i -g pnpm

# Copy and install dependencies
COPY package.json pnpm-lock.yaml panda.config.ts ./
RUN pnpm i --frozen-lockfile
COPY . ./

# Build application
RUN pnpm build

# Start application
CMD ["pnpm", "start"]