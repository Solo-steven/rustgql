import { minify_query as minifyQuery } from "rustgql_core";
import { Visitor } from "@babel/traverse";
import { TemplateLiteral, isIdentifier } from "@babel/types";

const DEFAULT_COMMENT = "graphql";
const DEFAULT_FUNCTION = "gql";

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
    const nextQuasi = concatQuasi.split("\"RUSTGQL_SYMBOL\"");
    for(let i = 0 ; i < node.quasis.length ; ++i) {
        node.quasis[i].value.raw = nextQuasi[i];
        node.quasis[i].value.cooked = nextQuasi[i];
    }
    return;
}

const visitor: Visitor = {
    TemplateLiteral(path) {
        const node = path.node;
        if(!node.leadingComments) {
            return;
        }
        const pluckComment = path.opts.comment || DEFAULT_COMMENT;
        const containPluckCommentIndex = node.leadingComments.findIndex(
            (comment) => comment.value.trim() === pluckComment
        );
        if(containPluckCommentIndex >= 0 ) {
            handleTemplateLiteral(node)
        }
    },
    TaggedTemplateExpression(path) {
        const node = path.node;
        const pluckTagFunction = path.opts.function || DEFAULT_FUNCTION;
        if(isIdentifier(node.tag)) {
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