[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

# Introduction

This project demonstrates how to drive your E2E tests with CodeceptJS - Playwright inside a svelte project.

* Tests are written in TS
* CI/CD with Github Actions
* Page Object Model is applied
* Visual Testing using https://github.com/stracker-phil/codeceptjs-pixelmatchhelper

## How to use

This is done using CodeceptJS <https://codecept.io/>

### Tech

This test uses a number of open source projects to work properly:

* <https://nodejs.org/en/> - evented I/O for the backend
* <https://codecept.io/> - CodeceptJS
* <https://svelte.dev/> - Svelte • Cybernetically enhanced web apps to build Frontend project

### Installation and build Frontend project

This requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies.

```sh
cd svelte-fun
npm i
```

Start the local project
```sh
cd svelte-fun
npm run dev
```

### How to trigger E2E test

```sh
cd ./__tests__/e2e
npm i
```

To start the local and run e2e tests:

```sh
npm run ci
```

Example output

```sh
PS C:\Users\nguyenth\Desktop\Svelte-fun> npm run ci

> svelte-app@1.0.0 ci
> start-server-and-test dev http://localhost:8080 test

1: starting server using command "npm run dev"
and when url "[ 'http://localhost:8080' ]" is responding with HTTP status code NaN
running tests using command "npm run test"


> svelte-app@1.0.0 dev
> rollup -c -w

rollup v2.79.1
bundles src/main.js → public/build/bundle.js...
LiveReload enabled
created public/build/bundle.js in 529ms

[2022-12-20 15:53:41] waiting for changes...

> svelte-app@1.0.0 start
> sirv public --no-clear --dev


  Your application is ready~! 🚀

  - Local:      http://localhost:8080
  - Network:    Add `--host` to expose

────────────────── LOGS ──────────────────

  [15:53:44] 200 ─ 4.92ms ─ /

> svelte-app@1.0.0 test
> cd ./__tests__/e2e/ && npx codeceptjs run --verbose

CodeceptJS v3.3.7 #StandWithUkraine
Using test root "C:\Users\nguyenth\Desktop\Svelte-fun\__tests__\e2e"
Helpers: Playwright, PixelmatchHelper
Plugins: screenshotOnFail, tryTo, retryTo, eachElement

Bookstore --
    [1]  Starting recording promises
    Timeouts: 
 » [Session] Starting singleton browser session
  Bookstore is showing
    --- STARTED "before each" hook: Before for "Bookstore is showing" ---
    I am on page "/"
  [15:53:51] 200 ─ 2.87ms ─ //
  [15:53:51] 200 ─ 1.27ms ─ /global.css
  [15:53:51] 200 ─ 3.15ms ─ /build/bundle.css
  [15:53:51] 200 ─ 3.39ms ─ /build/bundle.js
    --- ENDED "before each" hook: Before for "Bookstore is showing" ---
    I check visual differences "bookstore.png"
    » Check differences in bookstore.png ...
    » Load image from C:\Users\nguyenth\Desktop\Svelte-fun\__tests__\e2e\output/bookstore.png ...
    » Load image from C:\Users\nguyenth\Desktop\Svelte-fun\__tests__\e2e\tests\screenshots\base/bookstore.png ...
    » Difference: 0% | 0 / 921600 pixels
  √ OK in 349ms

  Adding new book
    --- STARTED "before each" hook: Before for "Adding new book" ---
    I am on page "/"
  [15:53:52] 200 ─ 2.08ms ─ //
  [15:53:52] 200 ─ 3.76ms ─ /global.css
  [15:53:52] 200 ─ 2.54ms ─ /build/bundle.css
  [15:53:52] 200 ─ 2.81ms ─ /build/bundle.js
    --- ENDED "before each" hook: Before for "Adding new book" ---
    bookstorePage: addNewBook 
      I fill field "#title", "New book"
      I fill field "#price", "120"
      I fill field "#description", "This is a new book"
      I click "#addNewBook button"
    I see "This is a new book"
  √ OK in 1074ms

  Add a book to cart
    --- STARTED "before each" hook: Before for "Add a book to cart" ---
    I am on page "/"
  [15:53:54] 200 ─ 1.58ms ─ //
  [15:53:54] 200 ─ 0.65ms ─ /global.css
  [15:53:54] 200 ─ 6.35ms ─ /build/bundle.css
  [15:53:54] 200 ─ 4.33ms ─ /build/bundle.js
    --- ENDED "before each" hook: Before for "Add a book to cart" ---
    bookstorePage: addNewBook 
      I fill field "#title", "New book"
      I fill field "#price", "120"
      I fill field "#description", "This is a new book"
      I click "#addNewBook button"
    bookstorePage: buyBook 
      I click "//button[text()="Buy"]"
    I see "Total Price: 120"
  √ OK in 1182ms


  OK  | 3 passed   // 5s
```
