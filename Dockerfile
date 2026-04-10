FROM node:20-alpine

WORKDIR /app

COPY license-api/package.json ./package.json
RUN npm install --omit=dev

COPY license-api/server.js ./server.js

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]
