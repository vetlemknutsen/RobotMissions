import {environmentGenerator, boxGenerator} from "./environmentGenerator";
import {dropGenerator, grabGenerator, moveGenerator} from "./actionGenerator";
import {missionGenerator} from "./missionGenerator";
import {robotGenerator} from "./robotGenerator";

export const toMissionJson = {
    mission: missionGenerator,
    environment: environmentGenerator,
    robot: robotGenerator,
    box: boxGenerator,
    move: moveGenerator,
    grab: grabGenerator,
    drop: dropGenerator
};

