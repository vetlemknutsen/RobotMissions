export const environmentGenerator = (block) => {
    const width = block.getFieldValue('width');
    const height = block.getFieldValue('height');

    return {
        environment: {
            grid: {
                width: width,
                height: height
            }
        }
    };
};