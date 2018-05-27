export const createSet = draw => {
    const drawSet = draw.set();

    return {
        add(list) {
            drawSet.add.apply(drawSet, [].concat(list));
        },
        clearAll() {
            drawSet.each(function() {
                this.off();
                this.remove();
            });
            drawSet.clear();
        }
    };
};
