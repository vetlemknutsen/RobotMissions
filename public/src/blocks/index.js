import {environment} from "./environment";
import {move} from "./actions";
import {grab} from "./actions";
import {drop} from "./actions";
import {mission} from "./mission";
import {box} from "./environment";
import {robot} from "./robot";


export const blocks = ([
    mission,
    ...environment,
    box,
    robot,
    move,
    grab,
    drop
]);