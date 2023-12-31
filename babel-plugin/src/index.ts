import { minify_query as minifyQuery } from "rustgql_core";
import { type Visitor } from "@babel/traverse";
import { type TemplateLiteral } from "@babel/types";

const DEFAULT_COMMENT = "graphql";
const DEFAULT_FUNCTION = "gql";

type StateType  = {
    opts: {
        comment: string,
        function: string,
    }
}

function handleTemplateLiteral(node: TemplateLiteral) {
    if(node.quasis.length === 1) {
        const rawValue = node.quasis[0].value.raw;
        const minifiedValue = minifyQuery(rawValue);
        node.quasis[0].value.raw = minifiedValue;
        node.quasis[0].value.cooked = minifiedValue
        return;
    }
    const concatQuasi = node.quasis.reduce((pre, current, index) => {
        if(index === 0) return current.value.raw;
        return pre + "\"RUSTGQL_SYMBOL\"" + current.value.raw;
    }, "")
    const minifiedValue = minifyQuery(concatQuasi);
    const nextQuasi = minifiedValue.split("\"RUSTGQL_SYMBOL\"");
    for(let i = 0 ; i < node.quasis.length ; ++i) {
        node.quasis[i].value.raw = nextQuasi[i];
        node.quasis[i].value.cooked = nextQuasi[i];
    }
    return;
}

const visitor: Visitor = {
    TemplateLiteral(path, state) {
        const node = path.node;
        if(!node.leadingComments) {
            return;
        }
        const pluckComment = (state as StateType).opts.comment || DEFAULT_COMMENT;
        const containPluckCommentIndex = node.leadingComments.findIndex(
            (comment) => comment.value.trim() === pluckComment
        );
        if(containPluckCommentIndex >= 0 ) {
            handleTemplateLiteral(node)
        }
    },
    TaggedTemplateExpression(path, state) {
        const node = path.node;
        const pluckTagFunction = (state as StateType).opts.function || DEFAULT_FUNCTION;
        if(node.tag.type === "Identifier") {
            if(node.tag.name === pluckTagFunction) {
                handleTemplateLiteral(node.quasi);
            }
        }
    }
};

export default function () {
    return {
        name: "graphql-query-minifier",
        visitor,
    }
}