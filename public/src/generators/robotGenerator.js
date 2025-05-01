import {toMissionJson} from "./index";

export const robotGenerator = (block) => {
    const id = block.getFieldValue("ID");
    const x = block.getFieldValue("x");
    const y = block.getFieldValue("y");

    let tasksBlock = block.getInputTargetBlock("TASKS");
    const tasks = [];

    if (tasksBlock) {
        let currentBlock = tasksBlock;
        while (currentBlock) {
            const generator = toMissionJson[currentBlock.type];
            if (generator) {
                tasks.push(generator(currentBlock));
            }
            currentBlock = currentBlock.getNextBlock();
        }
    }


    return {
            id: id,
            x: x,
            y: y,
            tasks : tasks,
    };
};

