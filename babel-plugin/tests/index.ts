import fs from "fs/promises";
import path from "path";
import { transform } from "@babel/core";
import MyPlugin from "../src/";

type TestCase = {
    fileId: string,
    input: string,
    output: string,
}

type FaildReason = {
    fileId: string,
    expectCode: string | null,
    getCode: string | null,
    transformError: Error | null,
}

let allTestCaseCount = 0;
const failedTestCase: Array<FaildReason> = []

async function readTestCasesParallel() {
    const testCaseRoots = await fs.readdir(path.join(__dirname, "./fixtures"));
    const testCases = await Promise.all(testCaseRoots.map(async (root)=> {
        const [input, output ]= await Promise.all([
            fs.readFile(path.join(__dirname, `./fixtures/${root}/input.js`)),
            fs.readFile(path.join(__dirname, `./fixtures/${root}/output.js`))
        ]);
        return { fileId: root, input: input.toString(), output: output.toString()} as TestCase
    }));
    allTestCaseCount = testCases.length;
    return testCases
}

async function matchTestCase(testCase: TestCase) {
    return new Promise((resolve, reject) => {
        transform(testCase.input, { plugins: [MyPlugin] }, (err, result) => {
            if(err) {
                resolve(result);
                failedTestCase.push({
                    fileId: testCase.fileId,
                    expectCode: null,
                    getCode: null,
                    transformError: err,
                });
                return;
            }
            if(!result) {
                failedTestCase.push({
                    fileId: testCase.fileId,
                    expectCode: null,
                    getCode: null,
                    transformError: new Error("transform result not exsied"),
                });
                return;
            }
            if(result.code === testCase.output) {
                resolve(result);
                return;
            }
            failedTestCase.push({
                fileId: testCase.fileId,
                expectCode: testCase.output,
                getCode: result.code || null,
                transformError: null,
            });
            resolve(result);
        })
    })
}

function summaryCodeCoverage() {
    let misMatchCount = 0;
    let babelErrorCount = 0;
    if(failedTestCase.length === 0) {
        console.log(" ===== All Test Pass =====");
        return;
    }
    for(const testCase of failedTestCase) {
        console.log(` =====  ${testCase.fileId} Failed =====`);
        if(testCase.transformError !== null) {
            misMatchCount ++;
        }else {
            babelErrorCount ++;
        }
        console.log(` ======| reason: ${testCase.transformError !== null ? "babel transform error" : "output missmatch "} `);
    }
    console.log(" ===== Summary ===== ");
    console.log(` ===|   pass count    : ${allTestCaseCount - misMatchCount - babelErrorCount}/${allTestCaseCount}`);
    console.log(` ===| mismatch error  : ${misMatchCount}/${allTestCaseCount} `);
    console.log(` ===| transform error : ${babelErrorCount}/${allTestCaseCount} `);
}

async function runAllTestCase() {
    const testCases = await readTestCasesParallel();
    await Promise.all(testCases.map(matchTestCase));
    summaryCodeCoverage();
}


runAllTestCase();