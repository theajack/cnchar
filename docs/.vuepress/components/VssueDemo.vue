<template>
    <Vssue
        :issue-id='issueId'
        :options='options'
    />
</template>

<script>
    import BitbucketV2 from '@vssue/api-bitbucket-v2';
    import GiteeV5 from '@vssue/api-gitee-v5';
    import GithubV3 from '@vssue/api-github-v3';
    import GitlabV4 from '@vssue/api-gitlab-v4';

    const platforms = {
        'bitbucket': {
            options: {
                api: BitbucketV2,
                owner: 'meteorlxy',
                repo: 'vssue',
                clientId: '6tKVqDXYzuvmzCnbGw',
            },
            issueId: 1,
        },
        'gitee': {
            options: {
                api: GiteeV5,
                owner: 'meteor_lxy',
                repo: 'vssue',
                clientId: '30c40c01df93c7ff2b043f389dfc404e8fe5cc3740211ac51a444a9512ea7a93',
                clientSecret: '9e4f336c3d532eeae7d1e84d81199c95c8da110da24bdd3a2da5ea6e4257d5dd',
            },
            issueId: 'IWWRQ',
        },
        'github': {
            options: {
                api: GithubV3,
                owner: 'meteorlxy',
                repo: 'vssue',
                clientId: 'a1097b7751127c6d1194',
                clientSecret: '5c95e2f890b6a2b80dbda17656e9b1db9e87a07b',
            },
            issueId: 1,
        },
        'gitlab': {
            options: {
                api: GitlabV4,
                owner: 'meteorlxy',
                repo: 'vssue',
                clientId: '5a80ead2a62ec3fd3a31a78b2bf0e5602bacd0513ab3b772e580b05e15d0d2cb',
            },
            issueId: 1,
        },
    };

    export default {
        name: 'VssueDemo',

        props: {
            platform: {
                type: String,
                required: true,
            },
        },

        computed: {
            options () {
                return platforms[this.platform].options;
            },

            issueId () {
                return platforms[this.platform].issueId;
            },
        },
    };
</script>
