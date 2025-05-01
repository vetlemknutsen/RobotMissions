
import {dropGenerator, grabGenerator, moveGenerator} from "./actionGenerator";
import {missionGenerator} from "./missionGenerator";
import {robotGenerator} from "./robotGenerator";
import {submissionGenerator} from "./submissionGenerator";
import {forkGenerator, mergeGenerator, waitGenerator} from "./flowgenerator";
import {shelfGenerator} from "./objectsGenerator";
import {isEmptyGenerator} from "./conditionsGenerator";

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
    isEmpty : isEmptyGenerator
};

