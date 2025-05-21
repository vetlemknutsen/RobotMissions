export const mission = {
    type: "mission",
    message0: "Mission Plan \n Warehouse Grid: X: %1 Y: %2 %3 %4 %5",
    args0: [
        {type: "field_number", name: "X", value: 0, min: 0, max: 10},
        {type: "field_number", name: "Y", value: 0, min: 0, max: 10},
        {
            type: "input_dummy"
        },
        {
            type: "field_label",
            text: "SubMissions:"
        },
        {
            type: "input_statement",
            name: "SUBMISSIONS",
            check: "submission"
        }
    ],
    colour: 210,
};
