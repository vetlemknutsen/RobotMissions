export const mission = {
    type: 'mission',
    message0: 'Mission Plan %1 %2 %3',
    args0: [
        {
            type: 'input_dummy'
        },
        {
            type: 'field_label',
            text: 'SubMissions:'
        },
        {
            type: 'input_statement',
            name: 'SUBMISSIONS'
        }
    ],
    colour: 100,
    previousStatement: null,
    nextStatement: null,
};
