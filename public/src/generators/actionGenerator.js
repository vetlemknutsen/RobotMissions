import {toMissionJson} from "./index";


export const moveGenerator = (block) => {
  const target = block.getFieldValue('TARGET');
  const object = block.getFieldValue('OBJECT');

  return `Move to ${object} ${target}`;
};

export const planGenerator = (block) => {
  const target = block.getFieldValue('TARGET');
  const object = block.getFieldValue('PLAN');

  return `Plan route to ${object} ${target}`;
};

export const grabGenerator = (block) => {
  const shelf = block.getFieldValue('SHELF');
  return `Grab Box in Shelf ${shelf}`;
};

export const dropGenerator = (block) => {
  const box = block.getFieldValue('BOX');
  return `Drop Box ${box}`;
};

