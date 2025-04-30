import {toMissionJson} from "./index";

export const environmentGenerator = (block) => {
    const width = block.getFieldValue('width');
    const height = block.getFieldValue('height');
    const boxes = [];

    const boxBlock = block.getInputTargetBlock('BOXES');

    if (boxBlock) {
        let currentBlock = boxBlock;
        while (currentBlock) {
            const generator = toMissionJson[currentBlock.type];
            if (generator) {
                boxes.push(generator(currentBlock));
            }
            currentBlock = currentBlock.getNextBlock();
        }
    }

    return {
            grid: {
                width: width,
                height: height
            },
            box: boxes
    };
};

export const boxGenerator = (block) => {
    const x = block.getFieldValue('x');
    const y = block.getFieldValue('y');

    return {
            x: x,
            y: y
    };
};