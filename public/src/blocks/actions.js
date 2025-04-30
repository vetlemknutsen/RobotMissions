/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export const move =
    {
        type: "move",
        message0: "Move to X: %1 Y: %2",
        args0: [
            {"type": "field_number", "name": "x", "value": 0, "min": 0, "max": 10},
            {"type": "field_number", "name": "y", "value": 0, "min": 0, "max": 10}
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 160
    };

export const grab = {
    type: 'grab',
    message0: 'Grab object',
    previousStatement: null,
    nextStatement: null,
    colour: 200
};

export const drop = {
    type: 'drop',
    message0: 'Drop object',
    previousStatement: null,
    nextStatement: null,
    colour: 200
};
