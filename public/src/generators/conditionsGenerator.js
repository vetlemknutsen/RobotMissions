import {toMissionJson} from "./index";

export const shelfConditionGenerator = (block) => {
    const method = block.getFieldValue('METHOD');
    const objectBlock = block.getInputTargetBlock('OBJECT');
    const shelf = objectBlock ? toMissionJson[objectBlock.type]?.(objectBlock) : null;

    return {
        shelf: shelf,
        type: method,
    };
};

export const submissionConditionGenerator = (block) => {
    const method = block.getFieldValue('METHOD');
    const objectBlock = block.getInputTargetBlock('OBJECT');
    const object = objectBlock ? toMissionJson[objectBlock.type]?.(objectBlock) : null;

    return {
        subMission: object,
        type: method,
    };
};

export const ifConditionGenerator = (block) => {
    const object = toMissionJson[block.getInputTargetBlock('OBJECT')?.type]?.(block.getInputTargetBlock('OBJECT'));
    const doBranch = [];

    let current = block.getInputTargetBlock('DO');
    while (current) {
        const gen = toMissionJson[current.type];
        if (gen) doBranch.push(gen(current));
        current = current.getNextBlock();
    }

    return {
        action: 'if',
        condition : object,
        do: doBranch
    };
};

export const ifElseConditionGenerator = (block) => {
    const objectBlock = block.getInputTargetBlock('OBJECT');
    const object = objectBlock ? toMissionJson[objectBlock.type]?.(objectBlock) : null;

    const doBranch = [];
    const elseBranch = [];

    let doBlock = block.getInputTargetBlock('DO');
    if (doBlock) {
        let currentBlock = doBlock;
        while (currentBlock) {
            const generator = toMissionJson[currentBlock.type];
            if (generator) {
                doBranch.push(generator(currentBlock));
            }
            currentBlock = currentBlock.getNextBlock();
        }
    }

    let elseBlock = block.getInputTargetBlock('ELSE');
    if (elseBlock) {
        let currentBlock = elseBlock;
        while (currentBlock) {
            const generator = toMissionJson[currentBlock.type];
            if (generator) {
                elseBranch.push(generator(currentBlock));
            }
            currentBlock = currentBlock.getNextBlock();
        }
    }

    return {
        action: 'if_then_else',
        condition : object,
        do: doBranch,
        else: elseBranch
    };
};


export const andConditionGenerator = (block) => {
    const leftBlock = block.getInputTargetBlock('LEFT');
    const rightBlock = block.getInputTargetBlock('RIGHT');

    const left = leftBlock ? toMissionJson[leftBlock.type]?.(leftBlock) : null;
    const right = rightBlock ? toMissionJson[rightBlock.type]?.(rightBlock) : null;

    return {
        type: "and",
        left: left,
        right: right
    };
};


export const orConditionGenerator = (block) => {
    const leftBlock = block.getInputTargetBlock('LEFT');
    const rightBlock = block.getInputTargetBlock('RIGHT');

    const left = leftBlock ? toMissionJson[leftBlock.type]?.(leftBlock) : null;
    const right = rightBlock ? toMissionJson[rightBlock.type]?.(rightBlock) : null;

    return {
        type: 'or',
        left: left,
        right: right
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
