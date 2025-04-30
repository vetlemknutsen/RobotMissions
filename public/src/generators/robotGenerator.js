export const robotGenerator = (block) => {
    const id = block.getFieldValue("ID");
    const x = block.getFieldValue("x");
    const y = block.getFieldValue("y");
    return {
            id: id,
            x: x,
            y: y
    };
};