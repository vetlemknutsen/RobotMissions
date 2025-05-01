import {move} from "./actions";
import {grab} from "./actions";
import {drop} from "./actions";
import {mission} from "./mission";
import {robot} from "./robot";
import {submission} from "./submissions";
import {fork, merge, wait} from "./flow";
import {shelf} from "./objects";
import {isEmpty} from "./conditions";


export const blocks = ([
    mission,
    submission,
    robot,
    move,
    grab,
    drop,
    fork,
    merge,
    wait,
    shelf,
    isEmpty
]);