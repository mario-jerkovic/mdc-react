
### Scripts

All scripts are avalible via `npm run <script_name>`. Mostly executable scripts are located in the '.scripts' folder of your project. In oder to keep it "transparent and friendly" we display a full CLI command which will be executed.

You can list all scripts by `npm run`

--

<b>Linting</b> <br> `npm lint` - lints your code within `packages` folder <br> `npm lintfix` - tries to fix linting errors <br>

This project uses [ESLint](https://github.com/eslint/eslint) with the [Airbnb style guide](https://github.com/airbnb/javascript). It has some minor overrides as well. I'll [find](https://github.com/sm-react/react-theming/blob/master/.eslintrc) all ESLint settings in `.eslintrc` file located in the root of your project. 
  
This linting scripts will check your code in `*.js` and `*.jsx` files within the `packages` folder.
  
If your IDE supports the linting settings from `.eslintrc` you'll be able to see same issues bouth from IDE and CLI.

**Note**: Some [files](https://github.com/sm-react/react-theming/blob/master/src/Intro.jsx#L1-L2) in `packages` use the comments to suppress linting errors. It's up to you to continue using them or remove and change code style appropriately.

--

<b>Publish</b> <br> `npm publish` - publish your code to NPM<br>

The publish uses [Lerna](https://github.com/lerna/lerna) that watches for changes in packages folder and treat every folder in packages as a separate module. It only publishes changed modules

This project uses [Babel](https://github.com/babel/babel) for transpilling your code with following presets:

- [es2015](http://babeljs.io/docs/plugins/preset-es2015/)

- [stage-2](http://babeljs.io/docs/plugins/preset-stage-2/)

- [react](http://babeljs.io/docs/plugins/preset-react/)

>be careful with stage-2 features because they are far from the final stage!

It's setted up to transpille all `*.js` and `*.jsx` files in your `packages` folder.

You'll [find](https://github.com/sm-react/react-theming/blob/master/.babelrc) your transpillation settings in the `.babelrc` file located in the root of your project.

In some cases you need only transpille your code, not publish. So use `npm run prepublish` and get you ES5 code in the `dist` folder.

>Transplling your code to ES5 helps to use it in any other projects without warring about babel settings of these projects.
 
**Note**: you need to set at least your own [name](https://github.com/sm-react/react-theming/blob/master/package.json#L2) and [version](https://github.com/sm-react/react-theming/blob/master/package.json#L3) in `package.json` before publishing. You might want to set other [fields](https://docs.npmjs.com/files/package.json) as well. 

--

<details>
  <summary>
    <b>Test</b>
  </summary>
   TODO :P
</details>

