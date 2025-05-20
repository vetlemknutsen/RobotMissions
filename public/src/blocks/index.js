import {move, plan} from "./actions";
import {grab} from "./actions";
import {drop} from "./actions";
import {mission} from "./mission";
import {robot} from "./robot";
import {submission} from "./submissions";
import {fork, merge} from "./flow";
import {shelf, submissionObject} from "./objects";
import {
    andCondition,
    ifCondition,
    ifElseCondition,
    shelfCondition,
    orCondition,
    submissionCondition,
    wait
} from "./conditions";


export const blocks = ([
    mission,
    submission,
    robot,
    move,
    plan,
    grab,
    drop,
    fork,
    merge,
    wait,
    shelf,
    submissionObject,
    ifCondition,
    ifElseCondition,
    andCondition,
    orCondition,
    shelfCondition,
    submissionCondition
]);