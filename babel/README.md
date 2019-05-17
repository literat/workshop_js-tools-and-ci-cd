# babel

* https://babeljs.io/
* https://babeljs.io/docs/en/babel-preset-env

* env
* browsers - target browsers
* loose - "loose" transformation - http://2ality.com/2015/12/babel6-loose-mode.html
  * ES6 to ES5
  * produces simpler ES5 code
  * **Pros:** The generated code is potentially faster and more compatible with older engines. It also tends to be cleaner, more “ES5-style”.
  * **Con:** You risk getting problems later on, when you switch from transpiled ES6 to native ES6. That is rarely a risk worth taking.