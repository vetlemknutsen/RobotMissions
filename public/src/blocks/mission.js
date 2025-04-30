export const mission = {
    type: 'mission',
    message0: 'Mission Plan %1 %2 %3 %4 %5 %6 %7',
    args0: [
        {
            type: 'input_dummy'
        },
        {
            type: 'field_label',
            text: 'Environment:'
        },
        {
            type: 'input_value',
            name: 'ENVIRONMENT',
        },
        {
            type: 'field_label',
            text: 'Robots:'
        },
        {
            type: 'input_value',
            name: 'ROBOTS',
        },
        {
            type: 'field_label',
            text: 'Actions:'
        },
        {
            type: 'input_statement',
            name: 'ACTIONS'
        }
    ],
    colour: 20,
    tooltip: 'Mission Plan containing a sequence of actions',
    helpUrl: ''
};
