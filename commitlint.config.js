module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', [
            'feat', 'fix', 'config', 'docs', 'style', 'refactor', 'test', 'build', 'ci', 'chore', 'revert', 'del'
        ]],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never']
    }
};
