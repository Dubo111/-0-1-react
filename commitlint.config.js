module.exports = {
  extends: ['@commitlint/config-conventional'],
  types: [
    'feat', // 新功能 feature
    'fix', // 修复 bug
    'docs', // 文档注释
    'style', // 代码格式(不影响代码运行的变动)
    'refactor', // 重构(既不增加新功能，也不是修复bug)
    'perf', // 性能优化
    'test', // 增加测试
    'chore', // 构建过程或辅助工具的变动
    'revert', // 回退
    'build', // 打包
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
