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