export const shelfGenerator = (block) => {
    const name = block.getFieldValue('NAME');
    return `shelf${name}`;
};

export const submissionObjectGenerator = (block) => {
    const ID = block.getFieldValue('ID');
    return `ID_${ID}`;
};