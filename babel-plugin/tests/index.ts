import { transform,  } from "@babel/core";
import fs from "fs";
import MyPlugin from "../src/";
const code = fs.readFileSync("./test.js").toString();

const testCase = [

];

const readQueryParallel = () => {

}

transform(
    code, 
    {
        plugins:[MyPlugin]
    }, 
    (err, result) => {
        if(err) {
            console.log("error:",err);
            return;
        }
        console.log("result",result);
    }
)