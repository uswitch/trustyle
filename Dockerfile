FROM nginx
EXPOSE 80
COPY ./storybook-static/ /usr/share/nginx/html
