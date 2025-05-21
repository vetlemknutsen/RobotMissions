export const submission = {
    type: "submission",
    message0: "SubMission ID %1 \n %2 %3",
    args0: [
        {type: "field_number", name: "ID", value: 0, min: 0, max: 10},
        {
            type: "field_label",
            text: "Robot:"
        },
        {
            type: "input_value",
            name: "ROBOT",
            check: "robot"
        },
    ],
    colour: 200,
    previousStatement: "submission",
    nextStatement: "submission",
};

