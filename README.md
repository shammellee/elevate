# Elevate Exercise

## Add Credentials to API File

1. Replace `<user_id>` with the user id on [line 3 of src/api.js](https://github.com/shammellee/elevate/blob/main/src/api.js#L3).
1. Replace `<token>` with the authentication token on [line 4 of src/api.js](https://github.com/shammellee/elevate/blob/main/src/api.js#L4).

```js
// File: src/api.js
const ELEVATE_API_CREDENTIALS = new URLSearchParams({
  authentication_user_id: <user_id>,
  authentication_token: '<token>'
});
```

## How to Install NPM Dependencies

1. Run `make install` or `npm install` in a terminal.

```sh
$ cd /path/to/repo
$ make install
```

```sh
$ cd /path/to/repo
$ npm install
```

## How to Run Tests

1. Run `make test` or `npm test` in a terminal.

```sh
$ cd /path/to/repo
$ make test
```

```sh
$ cd /path/to/repo
$ npm test
```

## How to Launch the Project

1. Run `make` or `npm start` in a terminal.
2. Visit <http://localhost:3000> if the page doesn't open automatically.

```sh
$ cd /path/to/repo
$ make
```

```sh
$ cd /path/to/repo
$ npm start
```

