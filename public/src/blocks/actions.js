
export const move =
    {
        type: "move",
        message0: "Move to %1 %2",
        args0: [
            {type: 'field_dropdown', name: 'OBJECT',
                options: [
                    ['shelf', 'Shelf'],
                    ['dropzone', 'DropZone'],
                ]
            },
            { type: 'field_input', name: 'TARGET', text: 'A' }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 60
    };

export const plan =
    {
        type: "plan",
        message0: "Plan route to %1 %2",
        args0: [
            {type: 'field_dropdown', name: 'PLAN',
                options: [
                    ['shelf', 'Shelf'],
                    ['dropzone', 'DropZone'],
                ]
            },
            { type: 'field_input', name: 'TARGET', text: 'A' }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 60
    };

export const grab = {
    type: 'grab',
    message0: 'Grab Box in Shelf %1',
    args0: [
        { type: 'field_input', name: 'SHELF', text: 'A' }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 60
};

export const drop = {
    type: 'drop',
    message0: 'Drop Box',
    previousStatement: null,
    nextStatement: null,
    colour: 60
};
