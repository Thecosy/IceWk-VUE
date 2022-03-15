module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  "rules": {
      test:/\.js$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        },
        "eslint-loader"
      ],
      exclude: __dirname + 'node_modules',
      include: __dirname + 'src'
  }

  
};