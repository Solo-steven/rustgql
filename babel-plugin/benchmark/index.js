const { Bench } = require('tinybench');
const compress = require('graphql-query-compress');
const fs = require('fs');
const { minify_query } = require('rustgql_core');
const bench = new Bench({time: 100});

const testQueryString = fs.readFileSync('../../fixtures/baseline/query_complex.graphql');

async function benchWrapper() {
    bench.add("compress", () => {
        compress(testQueryString);
    });
    bench.add("rustgql", () => {
        minify_query(testQueryString);
    });
    await bench.run();
    console.table(bench.table());
}

benchWrapper();