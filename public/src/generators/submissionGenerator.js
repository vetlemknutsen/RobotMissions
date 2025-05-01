import {toMissionJson} from "./index";

export const submissionGenerator = (block) => {
    const robotBlock = block.getInputTargetBlock("ROBOT");

    return {
        submission : {
            robot: robotBlock ? toMissionJson[robotBlock.type](robotBlock) : null,
        }
    };
};
