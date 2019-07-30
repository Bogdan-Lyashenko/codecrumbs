const lineNumber = require('line-number');
const compact = require('lodash/compact');
const { CC_NODE_TYPE, NO_TRAIL_FLOW } = require('../../../shared-constants');

const CRUMB_REGEX = /cc|codecrumb/;
const DEFAULT_COMMENT_REGEX = /^([^\/\/]*)\/\/(.*)$/;

const getCommentNodeValue = node => (node.value || '').trim();

const parseCodecrumbComment = (node = {}) => {
  const comment = getCommentNodeValue(node);

  const cc = { original: comment };
  try {
    const afterAlias = comment.split(':')[1];
    if (afterAlias) {
      const params = afterAlias.split(';');
      //check if has flow marker
      let counter = 0;
      if (params[0].includes('#')) {
        const flowParams = params[0].split('#');
        cc.flow = flowParams[0];
        cc.flowStep = +flowParams[1];
        counter++;
      } else {
        cc.flow = NO_TRAIL_FLOW;
      }

      cc.name = params[counter];
      if (params[counter + 1] && params[counter + 1][0] === '+') {
        cc.linesRange = +params[counter + 1].substr(1);
        counter++;
      }
      cc.details = params[counter + 1];
    }
  } catch (e) {
    console.error('Parameters parsing failed: ', e);
  }

  return cc;
};

const isCodecrumb = node => CRUMB_REGEX.test(getCommentNodeValue(node));

const buildCrumb = (params, crumbNodeLines, path) => ({
  type: CC_NODE_TYPE,
  id: `${path}-${crumbNodeLines.join('-')}`,
  name: params.name || '',
  displayLoc: `#${crumbNodeLines[0]}`,
  crumbNodeLines: params.linesRange
    ? [crumbNodeLines[0], crumbNodeLines[1] + params.linesRange]
    : crumbNodeLines,
  params
});

const setupGetCommentsFromCode = regex => fileCode => {
  if (!fileCode) {
    return [];
  }

  const result = compact(regex.exec(fileCode)) || [];

  return result.reduce((comments, value) => {
    const matchLineNumber = lineNumber(fileCode, regex);

    const parseRes = matchLineNumber.filter((val) => val.match == value)[0]

    if(parseRes) {
      const number = parseRes["number"]

      const nodeLines = [1, 1];

      return [...comments, { value, nodeLines }];
    } else {
      return comments;
    }

  }, []);
};

const getNodeLines = node => node.nodeLines;

const setupGetCrumbs = getCommentsFromCode => (fileCode, path) => {
  const crumbsList = [];
  const comments = getCommentsFromCode(fileCode);

  try {
    comments.forEach(comment => {
      if (isCodecrumb(comment)) {
        const params = parseCodecrumbComment(comment);
        const crumbNodeLines = getNodeLines(comment);

        crumbsList.push(buildCrumb(params, crumbNodeLines, path));
      }
    });

    return crumbsList;
  } catch (e) {
    console.log(path, e);
    return crumbsList;
  }
};

const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(DEFAULT_COMMENT_REGEX));

module.exports = {
  getCrumbs,

  setupGetCommentsFromCode,
  setupGetCrumbs,

  isCodecrumb,
  parseCodecrumbComment,
  buildCrumb
};
