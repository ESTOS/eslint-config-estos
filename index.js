import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import jsdoc from "eslint-plugin-jsdoc";
import pluginPromise from "eslint-plugin-promise";
import unicorn from "eslint-plugin-unicorn";
import tsLint from "typescript-eslint";

const config = tsLint.config(
    eslint.configs.recommended,
    tsLint.configs.recommended,
    jsdoc.configs["flat/recommended-typescript"],
    {
        plugins: { jsdoc: jsdoc, unicorn: unicorn, promise: pluginPromise },
        rules: {
            // #################################################
            // Unicorn
            "unicorn/prefer-node-protocol": "error",
            "unicorn/no-array-for-each": "error",

            // #################################################
            // ESlint
            "eqeqeq": ["error", "always", { null: "ignore" }],
            "default-case": "error",
            "dot-notation": "off",
            "no-void": [
                "error",
                {
                    allowAsStatement: true,
                },
            ],
            "block-scoped-var": "error",
            "curly": "off",
            "no-nested-ternary": "error",
            "no-self-compare": "error",
            "no-var": "error",

            // #################################################
            // Promise
            "promise/always-return": "off",
            "promise/no-callback-in-promise": "error",
            "promise/no-promise-in-callback": "error",
            "promise/no-nesting": "off",
            "promise/catch-or-return": [
                "error",
                {
                    allowFinally: true,
                    terminationMethod: ["catch", "finally"],
                },
            ],

            // #################################################
            // Typescript
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    vars: "all",
                    args: "none",
                    ignoreRestSiblings: false,
                },
            ],
            "@typescript-eslint/no-use-before-define": "error",
            "@typescript-eslint/no-misused-new": "error",
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: { arguments: false } }],
            "@typescript-eslint/no-confusing-void-expression": "error",
            "@typescript-eslint/no-for-in-array": "error",
            "@typescript-eslint/no-unnecessary-type-arguments": "error",
            "@typescript-eslint/no-unsafe-assignment": "error",
            "@typescript-eslint/no-unsafe-member-access": "error",
            "@typescript-eslint/no-unsafe-return": "error",
            "@typescript-eslint/explicit-member-accessibility": "error",
            "@typescript-eslint/camelcase": "off",
            "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
            "@typescript-eslint/no-explicit-any": [
                "error",
                {
                    ignoreRestArgs: true,
                },
            ],
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-this-alias": "error",
            "@typescript-eslint/no-wrapper-object-types": "error",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "variable",
                    format: ["camelCase", "snake_case", "UPPER_CASE"],
                },
                {
                    selector: "parameter",
                    format: ["camelCase", "snake_case"],
                },
                {
                    selector: "class",
                    format: ["PascalCase"],
                },
                {
                    selector: "method",
                    format: null,
                    custom: {
                        regex: "^[a-z].*",
                        match: true,
                    },
                },
                {
                    selector: "interface",
                    format: ["PascalCase"],
                    prefix: ["I"],
                },
            ],

            // #################################################
            // jsdoc
            "jsdoc/require-returns": 0,
        },
    },
    // Load at the end
    eslintConfigPrettier
);

export default config;
