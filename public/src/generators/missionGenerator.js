import {toMissionJson} from "./index";

export const missionGenerator = (block) => {
    const submissionsBlock = block.getInputTargetBlock("SUBMISSIONS");
    const x = block.getFieldValue("X");
    const y = block.getFieldValue("Y");
    const submissions = [];
    const robotPositions = new Set();

    if (submissionsBlock) {
        let currentBlock = submissionsBlock;
        while (currentBlock) {
            const generator = toMissionJson[currentBlock.type];
            if (generator) {
                const submissionData = generator(currentBlock);
                const robot = submissionData.submission.robot;
                if (robot) {
                    const key = `${robot.x},${robot.y}`;
                    if (robotPositions.has(key)) {
                        alert(`Duplicate robot position at (${robot.x}, ${robot.y})`);
                    } else {
                        robotPositions.add(key);
                    }
                }

                submissions.push(submissionData);
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


