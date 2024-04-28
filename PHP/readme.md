# PHP

- Requires a webserver in order to render to webpages (Remember LAMP?)
- For the purpose of the KB I'll probaby setup a dockerfile to init this.

## Docker

- [Official Apache PHP image](https://hub.docker.com/_/php) from docker hub

The following docker script runs a php server and outputs the resulting html.

```docker
FROM php:8.2-cli
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
CMD [ "php", "./your-script.php" ]
```
