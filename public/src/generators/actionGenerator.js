
export const moveGenerator = (block) => {
  const target = block.getFieldValue("TARGET");
  const object = block.getFieldValue("OBJECT");

  return `move(${object}_${target})`;
};

export const planGenerator = (block) => {
  const target = block.getFieldValue("TARGET");
  const object = block.getFieldValue("PLAN");

  return `planRoute(${object}_${target})`;
};

export const grabGenerator = (block) => {
  const shelf = block.getFieldValue("SHELF");
  return `grabBox(shelf_${shelf})`;
};

export const dropGenerator = (block) => {
  const box = block.getFieldValue("BOX");
  return `dropBox(shelf_${box})`;
};

