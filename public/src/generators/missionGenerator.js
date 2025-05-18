import {toMissionJson} from "./index";

export const missionGenerator = (block) => {
    const submissionsBlock = block.getInputTargetBlock("SUBMISSIONS");
    const x = block.getFieldValue("X");
    const y = block.getFieldValue("Y");
    const submissions = [];

    if (submissionsBlock) {
        let currentBlock = submissionsBlock;
        while (currentBlock) {
            const generator = toMissionJson[currentBlock.type];
            if (generator) {
                submissions.push(generator(currentBlock));
            }
            currentBlock = currentBlock.getNextBlock();
        }
    }

    return {
        mission: {
            x : x,
            y: y,
            submissions : submissions
        }
    };
};


