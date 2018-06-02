const traversal = (tree, fn) => {
    let queue = [].concat(tree);

    while (queue.length) {
        let node = queue.shift();

        fn(node);

        const nodeBody = node.children;
        if (nodeBody) {
            queue = [...queue, ...nodeBody];
        }
    }
};

const traversalSearch = (tree, fn) => {
    const result = [];

    traversal(tree, node => {
        if (fn(node)) {
            result.push(node);
        }
    });

    return result;
};

module.exports = {
    traversal,
    traversalSearch
};
