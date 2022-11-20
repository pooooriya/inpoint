FROM node:lts as dependencies
WORKDIR /inpoint
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /inpoint
COPY . .
COPY --from=dependencies /inpoint/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /inpoint
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /inpoint/next.config.js ./
COPY --from=builder /inpoint/public ./public
COPY --from=builder /inpoint/.next ./.next
COPY --from=builder /inpoint/node_modules ./node_modules
COPY --from=builder /inpoint/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]