import MyPlugin from "./src";
import { transform } from "@babel/core";

const code = `
    const query = /* graphql */\`
        query GetUser {
            name, age
        }
    \`;
`;

async function testResult(code: string, options = {}) {
    return new Promise((resolve, reject) => {
        transform(
            code,
            { plugins: [
                [
                    MyPlugin,
                    options
                ]
            ] },
            (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                if(!result) {
                    reject(new Error("result is null"));
                    return;
                }
                resolve(result);
            }
        )
    });
};

async function mainRunnner() {
    await testResult(code, {
        comment: "test"
    }).then((result) => {
        console.log(result);
    })
}

mainRunnner();