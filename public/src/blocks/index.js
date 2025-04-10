import {environment} from "./environment";
import {move} from "./actions";
import {grab} from "./actions";
import {drop} from "./actions";



export const blocks = ([
    ...environment,
    move,
    grab,
    drop
]);