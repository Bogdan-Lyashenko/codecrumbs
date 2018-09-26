const search = (tree, fn, getBody = node => node.children) => {
  let queue = [].concat(tree);

  while (queue.length) {
    let node = queue.shift();

    if (fn(node)) {
      return;
    }

    const nodeBody = getBody(node);
    if (nodeBody) {
      queue = [...queue, ...nodeBody];
    }
  }
};


module.exports = {
  search
};
