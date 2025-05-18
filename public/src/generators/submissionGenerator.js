import {toMissionJson} from "./index";

export const submissionGenerator = (block) => {
    const id = block.getFieldValue("ID");
    const robotBlock = block.getInputTargetBlock("ROBOT");

    return {
        submission : {
            id: id,
            robot: robotBlock ? toMissionJson[robotBlock.type](robotBlock) : null,
        }
    };
};
