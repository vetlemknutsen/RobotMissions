

export const moveGenerator = (block) => {
  const x = block.getFieldValue('x');
  const y = block.getFieldValue('y');
  return {
    action: 'move',
    x: x,
    y: y
  };
};

export const grabGenerator = () => {
  return {
    action: 'grab'
  };
};

export const dropGenerator = () => {
  return {
    action: 'drop'
  };
};

