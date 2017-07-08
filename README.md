### Introduction
This project was made for HK01 offsite test.

This project was bootstrapped using `react-native init`.

Following node packages were used for development:

1. [redux](https://github.com/reactjs/redux/tree/master/docs)
2. [react-redux](https://github.com/reactjs/react-redux)
3. [redux-thunk](https://github.com/gaearon/redux-thunk)
4. [redux-logger](https://github.com/gaearon/redux-thunk)
5. [react-navigation](https://github.com/react-community/react-navigation)

### How to run

Clone this project and run the following command in project root to install dependencies:

    npm install

Or with `yarn`:

    yarn install

Run in development environment ([`react-native-cli`](https://www.npmjs.com/package/react-native-cli) need to be installed globally):

    react-native run-ios  // for ios

    react-native run-android // for android


### How to test

This project includes basic rendering test for all components. To run the tests, simply run:

    npm test

Or with `yarn`:

    yarn test

in the project root.

### How to build

Since building react-native apps for production requires some setup (such as code signing) individually. Please refer to the detailed steps in the [official documentation](http://facebook.github.io/react-native/releases/0.46/docs/running-on-device.html#building-your-app-for-production).

However, to run in release configuration, please use the following commands:

    npm run production-ios    // iOS
    yarn run production-ios   // or iOS with yarn

    npm run production-android // Android
    yarn run production-android // or Android with yarn


### Screenshots

![alt text](https://github.com/johnsonsu/react-native-hk01-test/raw/master/screenshots/loading.png)

![alt text](https://github.com/johnsonsu/react-native-hk01-test/raw/master/screenshots/home.png)

![alt text](https://github.com/johnsonsu/react-native-hk01-test/raw/master/screenshots/app.png)
