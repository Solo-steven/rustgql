const { Bench } = require('tinybench');
const { transform } = require('@babel/core');
const fs = require('fs');
const path = require('path');
const tranformCompressGraphql = require('babel-plugin-transform-compress-graphql');
const MyPlugin = require('../dist');
const code = `const query = /* graphql */ \`${fs.readFileSync(path.join(__dirname,"../../fixtures/baseline/query_complex.graphql")).toString()}\``;
const bench = new Bench({ time: 150 });

async function asyncTransform(plugins) {
    return new Promise((resolve, reject) => {
        transform(
            code, 
            { plugins },
            (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                if(!result) {
                    reject();
                    return;
                }
                resolve(result.code);
            }
        )
    })
}
async function benchWrapper() {
    await asyncTransform([tranformCompressGraphql]);
    await asyncTransform([MyPlugin]);
    bench.add("transform-compress-graphql", async () => {
        await asyncTransform([tranformCompressGraphql]);
    });
    bench.add("graphql-query-minifier", async () => {
        await asyncTransform([MyPlugin]);
    });
    await bench.run();
    console.table(bench.table());
}
async function compareResultLength() {
    const codeFromCompress  = await asyncTransform([tranformCompressGraphql]);
    const codeFromGraphql = await asyncTransform([MyPlugin]);
    console.log("===============================================");
    console.log("Compress Length: ", codeFromCompress.length + "/* graphql */".length);
    console.log("My Plugin Length:", codeFromGraphql.length);
    console.log("===============================================");
}

benchWrapper();
compareResultLength();