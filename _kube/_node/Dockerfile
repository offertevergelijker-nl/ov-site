# Build Stage 1
FROM node:22-alpine AS build
WORKDIR /app

RUN corepack enable

# Copy package.json and your lockfile
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY --link ./_common /app/_common
COPY --link ./site /app/site

WORKDIR /app/site

# Install dependencies
RUN pnpm i

# Build the project
RUN pnpm run build

# Build Stage 2
FROM node:22-alpine
WORKDIR /app

# Copy the entire output directory
COPY --from=build /app/site/.output/ ./

# Change the port and host
ENV PORT 80
ENV HOST 0.0.0.0

EXPOSE 80

CMD ["node", "./server/index.mjs"]