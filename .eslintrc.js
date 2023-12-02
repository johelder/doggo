module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react-hooks/recommended'],
  plugins: ['import', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unstable-nested-components': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern: 'react+(|-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern:
                  '@+(routes|screens|components|hooks|lib|providers|services|styles|utils|theme|assets|types)',
                group: 'internal',
                position: 'before',
              },

              {
                pattern: './',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react+(|-native)'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
