module.exports = {
  extends: ['@commitlint/config-conventional'],
  types: [
    'feat',
    'fix',
    'docs',
    'style',
    'refactor',
    'perf',
    'test',
    'build',
    'ci',
    'chore',
    'revert',
    'wip',
  ],
  scope: {
    required: false,
    allowed: ['api', 'ui', 'deps'],
  },
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  subjectSeparator: ':\n',
  subjectPattern: '.+',
  bodyPattern: '.+',
  footerPattern: '.+',
  messages: {
    type: 'Commit type must be one of [{{types}}]',
    // 其他自定义错误消息
  },
};
