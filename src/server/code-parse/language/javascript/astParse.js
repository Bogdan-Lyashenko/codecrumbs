// TODO: add by config
/**
 [
'typescript',
 'flow',
 'bigInt',
 ]
 */
const config = {
  sourceType: 'module',
  plugins: [
    'jsx',
    'asyncGenerators',
    'classProperties',
    'classPrivateProperties',
    'classPrivateMethods',
    'doExpressions',
    'dynamicImport',
    'exportDefaultFrom',
    'exportNamespaceFrom',
    'functionBind',
    'functionSent',
    'importMeta',
    'logicalAssignment',
    'nullishCoalescingOperator',
    'numericSeparator',
    'objectRestSpread',
    'optionalCatchBinding',
    'optionalChaining',
    'throwExpressions'
  ]
};

const getNodeLines = node => [node.loc.start.line, node.loc.end.line];

module.exports = {
  config,
  getNodeLines
};
