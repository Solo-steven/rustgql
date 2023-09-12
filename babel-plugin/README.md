# babel-plugin-graphql-query-minifier

> This plugin is to minify your graphql query string when transform JavaScript/TypeScript file by babel.

## Install
```
npm install -D babel-plugin-graphql-query-minifier
```
## Quick Start
This plugin can help you minify your graphql string when babel transform your JavaScript/TypeScript files. By minify the query string, you can get a more mini size of result bundle files.

This plugin can minify query string by certain comment or tag function name, default is `graphql` comment and `gql` tag function, you can change it by option config (see below section).

For example below is some query string:
```js
const queryByComment = /* graphql */`
    query GetUser {
        name,
        age,
        id
    }
`;
const queryByTagFunction = gql`
    mutation ChangeSomeThing (uuid: ${uuid}) {
        result,
        log,
    }
`;
```
By this plugin, you can get :
```js
const queryByComment = /* graphql */`query GetUser{name,age,id}`;
const queryByTagFunction = gql`mutation ChangeSomeThing($uuid:String=${uuid}){result,log}`;
```

## Usage
You can use babel config to start this plugin. By using `babelrc` :
```json
{
    "plugins": [
        [
            "babel-plugin-graphql-query-minifier",
            {
                "comment": "graphql",
                "function": "gql",
            }
        ]
    ]
}
```

## Option Config
This plugin provide you can customize the comment name and tag function name to minify graphql query string, you can pass config by babel config or using CLI or API.
The following options are available:
- `comment` : `String`, comment values in front of graphql query string.
- `function` : `String`, tag function name take query string as arguments.

## Compare with grahpql-compress
This plugin can minify more charater than `graphql-compress` related plugin, and it's core is running by wasm, so it is faster than use `graphql-compress`.

For example, `babel-plugin-transform-compress-graphql` would still leave some space after argument type and the fragment spread.
```js
const query = /* graphql */ `
    query QueryWithArgument(name: String = "test-name") {
        ... SomeFragment
        ... on SomeData {
            field
        }
    }
`;
// result of using `babel-plugin-transform-compress-graphql`
const queryResult1 = `query QueryWithArgument($name:String = "test-name"){... SomeFragment ... on SomeData{field}}`;
// result of using `babel-plugin-graphql-query-minifier`
const queryResult2 = `query QueryWithArgument($name:String="test-name"){...SomeFragment...on SomeData{field}}`;
```
And it's speed is also faster then using `graphql-compress`'s related plugin, by using `tinybench` package, result shows that `graphql-query-minifier` is 3 time faster then `transform-compress-graphql`, you can see this result by running `yarn bench` at this repo.



