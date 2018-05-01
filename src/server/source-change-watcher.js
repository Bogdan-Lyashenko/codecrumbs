module.exports = {
    subscribeOnChange(fn) {
        fn([{ name: 'new json here' }]); //call on file change
    }
};
