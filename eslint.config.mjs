import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
        {
            'files': ['**/*/*.test.js'],
            'plugins': ['jest'],
            'extends': ['plugin:jest/recommended'],
            'rules': { 'jest/prefer-expect-assertions': 'off' }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {}
};

export default [
    pluginJs.configs.recommended,
    {
        ignores: [
            'dist/', '*.json'
        ], // отключение проверок для папок
    },
    {
        // определение стандарта и парсинга
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: globals.browser,
        },
    },
    {
    // files: ['src/**/*.js'],
        rules: {
            indent: [
                'error', 4
            ], // отступы, авто
            semi: [
                'error', 'always'
            ], // точка с запятой, авто
            'no-unused-vars': 'off', // не испоьзуемые переменные
            'no-console': 'off', // console.log
            'no-var': 'error',
        },
    },
    {
        files: [ '*.config.*' ], // правила для конфигов
        rules: {
            'no-underscore-dangle': [ 'off' ], // двойное подчеркивание перед/после переменной
            'import/no-extraneous-dependencies': 'off', // импорт из дев-зависимостей
        },
    },
    {
        plugins: { '@stylistic/js': stylisticJs, },
        rules: {
            'max-len': [
                'error', { code: 120 }
            ], // длинна строки, нет авто
            quotes: [
                'error', 'single'
            ], // одинарные кавычки, авто
            'array-bracket-spacing': [
                'error', 'always'
            ], // пробелы внутри массива - авто
            'array-bracket-newline': [
                'error', {
                    'multiline': true, 'minItems': 2
                }
            ], // перенос элементов массива на новые строки, если многоэлементный - авто
            'object-curly-spacing': [
                'error', 'always'
            ], // пробелы внутри объекта
            'object-curly-newline': [
                'error', {
                    'ObjectExpression': {
                        'multiline': true, 'minProperties': 2
                    },
                }
            ], // перенос свойств объекта на новые строки, если много свойств - авто
            'no-multi-spaces': [
                'error',
                {
                    exceptions: {
                        'Property': false,
                        'BinaryExpression': true,
                        'VariableDeclarator': true,
                        'ImportDeclaration': true
                    }
                }
            ], // убираем много пробелов в разных местах, авто
            'key-spacing': [
                'error', { 'mode': 'strict' }
            ],
            'no-trailing-spaces': 'error',
            'no-multiple-empty-lines': [
                'error', {
                    max: 1, // одна внутренняя
                    maxBOF: 1, // одна сверху в импортах
                }
            ], // пустые строки, авто
        },
    },
];