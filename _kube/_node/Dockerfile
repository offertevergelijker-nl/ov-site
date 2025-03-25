FROM node:22-alpine AS image
RUN mkdir -p /_pnpm_cache
USER root
RUN npm -g i pnpm

FROM image AS build
RUN mkdir -p /_pnpm_cache
COPY --link --chown=www-data:www-data --chmod=755 . .
RUN pnpm config set store-dir /_pnpm_cache && pnpm i
RUN pnpm build

FROM build AS run
RUN mkdir -p /_pnpm_cache
EXPOSE 3000
CMD ["node", "./.output/server/index.mjs"]

