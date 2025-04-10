import {environmentGenerator} from "./environmentGenerator";
import {dropGenerator, grabGenerator, moveGenerator} from "./actionGenerator";

export const toMissionJson = {
    environment: environmentGenerator,
    move: moveGenerator,
    grab: grabGenerator,
    drop: dropGenerator
};

