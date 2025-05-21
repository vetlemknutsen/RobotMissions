import {toMissionJson} from "./index";

export const robotGenerator = (block) => {
    const id = block.getFieldValue("ID");
    const x = block.getFieldValue("X");
    const y = block.getFieldValue("Y");


    // check bounds
    let parent = block.getParent();
    let grandparent = parent.getParent()
    const gridXStr = grandparent.getFieldValue("X");
    const gridYStr = grandparent.getFieldValue("Y");
    const gridX = parseInt(gridXStr, 10);
    const gridY = parseInt(gridYStr, 10);

    if (x > gridX || y > gridY) {
        alert(`Robot ${id} is out of bounds! Grid is ${gridX}x${gridY}, robot at (${x}, ${y})`);
    }


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

