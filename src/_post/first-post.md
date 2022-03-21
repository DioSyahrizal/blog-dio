---
title: "First Post"
date: "21 March 2022"
excerpt: "First Post"
cover_image: "/images/posts/welcome.jpg"
---

## Why testing is important?

- Testing give you confident to make changes
- Test help guide the design of your application
- Testable apps is easier to maintenance

## What is Jest?

- Jest is a testing framework developed by Facebook & open source contributors
- Included in `create-react-app`
- It works in React, Vue, Angular, etc

## How can i install Jest?

if you are already using CRA, then jest is automatically installed by default.

You can see it in `package.json` like this

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

and run it with yarn

```bash
yarn test
```

or with npm

```bash
npm test
```

But if you not using CRA, you can install manually like this

```bash
yarn add --dev jest

or

npm install --save-dev jest
```

## Adding support for Advanced Testing

- React Test Renderer

```bash
yarn add --dev react-test-renderer
```

- Enzyme for Shallow Rendering

```bash
yarn add --dev enzyme
```

Jest automatically detect `*.test.` & `*.spec.js` file include in running testing, or it can run test file in **test** directory

## Customize Jest Configuration

In newest version of CRA you will get a basic configuration of jest in `jest.config.js`

```javascript
module.exports = {
  setupFilesAfterEnv: ["./src/setupTests.ts"],
};
```

`setupTest.js`

```javascript
import "@testing-library/jest-dom";
```

We import testing library so our text editor can recognize library for testing like jest-dom, etc.

For further configuration you can see the documentation [here](https://jestjs.io/docs/en/configuration)
