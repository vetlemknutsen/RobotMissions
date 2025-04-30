

export const environment = [
    {
        type: "environment",
        message0: "Grid size X: %1 Y: %2 %3",
        args0: [
            {"type": "field_number", "name": "width", "value": 5, "min": 1, "max": 20},
            {"type": "field_number", "name": "height", "value": 5, "min": 1, "max": 20},
            {"type": "input_statement", "name": "BOXES"}
        ],
        output : null,
        colour: 60
    }
];

export const box = {
    type: 'box',
    message0: 'Box at X: %1 Y: %2',
    args0: [
        {"type": "field_number", "name": "x", "value": 0, "min": 0, "max": 20},
        {"type": "field_number", "name": "y", "value": 0, "min": 0, "max": 20}
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 100
};