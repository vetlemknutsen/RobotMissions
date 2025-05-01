export const shelfGenerator = (block) => {
    const name = block.getFieldValue('NAME');
    return `shelf${name}`;
};