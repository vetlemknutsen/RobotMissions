

export const moveGenerator = (block) => {
  const target = block.getFieldValue('TARGET');
  return `Move to Shelf ${target}`;
};

export const grabGenerator = (block) => {
  const box = block.getFieldValue('BOX');
  return `Grab Box ${box}`;
};

export const dropGenerator = () => {
  const box = block.getFieldValue('BOX');
  return `Drop Box ${box}`;
};

