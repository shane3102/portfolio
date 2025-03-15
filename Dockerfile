FROM node:20.18.0-alpine AS build
WORKDIR /app
RUN apk add gettext
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2024 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80