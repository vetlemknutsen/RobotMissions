import {toMissionJson} from "./index";

export const missionGenerator = (block) => {
    const submissionsBlock = block.getInputTargetBlock("SUBMISSIONS");
    const submissions = [];

    console.log("Mission Block Structure:", block);

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
            submissions : submissions
        }
    };
};


