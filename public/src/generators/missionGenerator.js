import {toMissionJson} from "./index";

export const missionGenerator = (block) => {
    const environmentBlock = block.getInputTargetBlock('ENVIRONMENT');
    const robotBlock = block.getInputTargetBlock("ROBOTS");
    const actions = [];

    let actionBlock = block.getInputTargetBlock('ACTIONS');
    while (actionBlock) {
        const generator = toMissionJson[actionBlock.type];
        if (generator) {
            actions.push(generator(actionBlock));
        }
        actionBlock = actionBlock.getNextBlock();
    }

    return {
        mission: {
            environment: environmentBlock ? toMissionJson[environmentBlock.type](environmentBlock) : null,
            robot: robotBlock ? toMissionJson[robotBlock.type](robotBlock) : null,
            actions: actions
        }
    };
};