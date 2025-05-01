import {toMissionJson} from "./index";

export const forkGenerator = (block) => {
    const branch1 = [];
    const branch2 = [];

    let branch1Block = block.getInputTargetBlock('BRANCH1');
    while (branch1Block) {
        const generator = toMissionJson[branch1Block.type];
        if (generator) {
            branch1.push(generator(branch1Block));
        }
        branch1Block = branch1Block.getNextBlock();
    }

    let branch2Block = block.getInputTargetBlock('BRANCH2');
    while (branch2Block) {
        const generator = toMissionJson[branch2Block.type];
        if (generator) {
            branch2.push(generator(branch2Block));
        }
        branch2Block = branch2Block.getNextBlock();
    }

    return {
        action: 'fork',
        branches: [branch1, branch2]
    };
};

export const mergeGenerator = () => {
    return {
        action: 'merge'
    };
};

export const waitGenerator = (block) => {
    const objectBlock = block.getInputTargetBlock('OBJECT');
    const object = objectBlock ? toMissionJson[objectBlock.type](objectBlock) : null;

    const conditionBlock = objectBlock?.getInputTargetBlock('CONDITION');
    const condition = conditionBlock ? toMissionJson[conditionBlock.type](conditionBlock) : null;


    return {
        action: 'wait',
        object : object,
        condition: condition
    };
};