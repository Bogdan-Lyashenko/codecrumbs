const NO_TRAIL_FLOW = require('../../../../shared/constants').NO_TRAIL_FLOW;

const CRUMB = 'codecrumb',
  CRUMB_SHORT_HANDLER = 'cc';

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

const isCodecrumb = node => {
  if (!node) return false;

  const comment = getCommentNodeValue(node);
  return comment.startsWith(CRUMB) || comment.startsWith(CRUMB_SHORT_HANDLER);
};

const buildCrumb = (params, crumbNodeLines) => ({
  name: params.name || '',
  displayLoc: `#${crumbNodeLines[0]}`,
  crumbNodeLines: params.linesRange
    ? [crumbNodeLines[0], crumbNodeLines[1] + params.linesRange]
    : crumbNodeLines,
  params
});

// per language
const getCommentsFromCode = fileCode => [];
const getNodeLines = node => [0, 1];
//--

// this should de defined in languages
const getCrumbs = (fileCode, path) => {
  const crumbsList = [];
  const comments = getCommentsFromCode(fileCode);

  try {
    comments.forEach(comment => {
      if (isCodecrumb(comment)) {
        const params = parseCodecrumbComment(comment);
        const crumbNodeLines = getNodeLines(comment);

        crumbsList.push(buildCrumb(params, crumbNodeLines));
      }
    });

    return crumbsList;
  } catch (e) {
    console.log(path, e);
    return crumbsList;
  }
};

module.exports = {
  getCrumbs,
  isCodecrumb,
  parseCodecrumbComment,
  buildCrumb
};
