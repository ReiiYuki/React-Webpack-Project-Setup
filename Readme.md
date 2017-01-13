# React & Webpack Setup Tutorial

Most of people said that creating project with React and Webpack is very hard. In fact it isn't hard like that if you understand each of component that we have to setup to the project. So I create this tutorial, because I am the one of React Starter who think setting up the project is fucking hard. I hope that you will have more happy life in React development after you finish this tutorial.

## Requirement

```
Node.js
```

## Let's start !!!

1. Initialize Project with this following command :

  ```
  $ npm init
  ```

2. Fill the information

  ```
  name: (Type your project in lowercase)
  version: (Put any number that you want)
  description: (Any description about your project)
  entry point: (Entry point file of your project in this project I use index.js)
  test command: (Don't have to input right now)
  git repository: (Input your git repository)
  keywords: (Input any keywords of your project)
  author: (Put your name)
  license: (Put your project licence)
  ```

3. Install Webpack with following command :

  ```
  $ npm i webpack --save-dev
  ```

  Why we use Webpack ? You might have this question in your head, is this true?

  * Webpack can combine many Javascript modules together, so it allow you to develop Javascript with any style that you like such as ES6.
  * You can install loader to webpack. Loader is used for making our Javascript can work with any type of file based on that loader.

4. Create file which is called `webpack.config.js`

  ```js
  var path = require('path')

  module.exports = {
    entry : path.resolve(__dirname, 'src/js/index.js'),
    output : {
      publicPath :'/dist/js/',
      path : path.resolve(__dirname, 'dist/js'),
      filename : 'bundle.js'
    },
    module: {
      loaders : [

      ]
    }
  }
  ```

  Wow ! WTF ! Why do we have to write something like this? I will explain each path of webpack to you.

  Why do we require path in webpack ?
  * Because it is the modules for joining the path of directory

  Entry is entry file which our web application will start from here.

  Output show the information of output file after we build our project.(Production) It contains this following part.
  * publicPath is path of your output file in the server. For example we put `/dist/js/` so it will be `http://server/dist/js/`.
  * path is path of local disk directory which store the output file.
  * filename is name of your output file which we will reference to it in our `index.html` later.

  Module is used for filling the module that we will use in our project.

  Loader is one of the module as I said before that is used for making our javascript can work with each type of file.

To be add soon ... 

## Licence

```
MIT License

Copyright (c) 2017 Voraton Lertrattanapaisal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
