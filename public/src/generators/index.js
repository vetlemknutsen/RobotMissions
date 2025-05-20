
import {dropGenerator, grabGenerator, moveGenerator, planGenerator} from "./actionGenerator";
import {missionGenerator} from "./missionGenerator";
import {robotGenerator} from "./robotGenerator";
import {submissionGenerator} from "./submissionGenerator";
import {forkGenerator, mergeGenerator} from "./flowgenerator";
import {shelfGenerator, submissionObjectGenerator} from "./objectsGenerator";
import {
    andConditionGenerator,
    ifConditionGenerator,
    ifElseConditionGenerator,
    shelfConditionGenerator, orConditionGenerator, submissionConditionGenerator,waitGenerator
} from "./conditionsGenerator";

export const toMissionJson = {
    mission: missionGenerator,
    robot: robotGenerator,
    move: moveGenerator,
    grab: grabGenerator,
    drop: dropGenerator,
    submission : submissionGenerator,
    fork : forkGenerator,
    merge : mergeGenerator,
    wait : waitGenerator,
    shelf : shelfGenerator,
    submissionObject : submissionObjectGenerator,
    if_condition : ifConditionGenerator,
    if_else_condition : ifElseConditionGenerator,
    and_condition : andConditionGenerator,
    or_condition : orConditionGenerator,
    shelfCondition : shelfConditionGenerator,
    submissionCondition : submissionConditionGenerator,
    plan : planGenerator
};

