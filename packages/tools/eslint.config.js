module.exports = {

    "extends": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "env": {
        "es6": true
    },
    globals: {
        MyGlobal: true
    },
    rules: {
        semi: [2, "always"]
    }

};