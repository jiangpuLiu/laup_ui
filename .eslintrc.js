module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        'space-infix-ops': ['error', { 'int32Hint': false }],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'no-param-reassign': ['error'],
        'no-underscore-dangle': ['error', {
            allow: ['__iconfont__svg__cssinject__']
        }],
        'prefer-destructuring': ['error', {
            'VariableDeclarator': {
                'array': true,
                'object': true,
            },
            'AssignmentExpression': {
                'array': true,
                'object': false,
            },
        }],
        'arrow-body-style': ['error', 'as-needed'],
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': ['error', 'always'],
        'semi': ['error', 'always'],
        'eol-last': ['error', 'always'],
        'eqeqeq': ['error', 'always'],
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'block-spacing': ['error', 'always'],

        // 常用规则
        'vue/component-name-in-template-casing': ['error', 'PascalCase'], // Vue 组件名驼峰命名
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'always'
        }], // HTML标签右括号换行风格
        'vue/html-indent': ['error', 2, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }], // HTML标签缩进
        'vue/no-v-html': 'off', // 允许使用v-html
        'vue/order-in-components': ['error', {
            'order': [
                'el',
                'name',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'data',
                'computed',
                'watch',
                'LIFECYCLE_HOOKS',
                'methods',
                'head',
                ['template', 'render'],
                'renderError'
            ]
        }], // 组件选项顺序
        'vue/no-multiple-template-root': 'off', // 允许多个根元素
        'vue/no-unused-components': 'error', // 禁止未使用的组件
        'vue/no-unused-vars': 'error', // 禁止未使用的变量
        'vue/require-default-prop': 'off', // 不要求默认prop
        'vue/require-prop-types': 'off', // 不要求prop类型
        'vue/require-v-for-key': 'error', // v-for要求key
        'vue/singleline-html-element-content-newline': 'off', // 单行HTML元素内容换行
        'vue/valid-v-for': 'error' // 有效的v-for
    }
};
