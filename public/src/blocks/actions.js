
export const move =
    {
        type: "move",
        message0: "Move to Shelf %1",
        args0: [
            { type: 'field_input', name: 'TARGET', text: 'A' }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 60
    };

export const grab = {
    type: 'grab',
    message0: 'Grab Box %1',
    args0: [
        { type: 'field_input', name: 'BOX', text: 'A' }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 60
};

export const drop = {
    type: 'drop',
    message0: 'Drop Box %1',
    args0: [
        { type: 'field_input', name: 'BOX', text: 'A' }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 60
};
