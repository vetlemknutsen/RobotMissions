export const robot = {
    type : "robot",
    message0 : "Robot ID %1 Position X: %2 Y: %3 \n Tasks: %4",
    args0 : [
        {"type": "field_number", "name": "ID", "value": 0, "min": 0, "max": 10},
        {"type": "field_number", "name": "X", "value": 0, "min": 0, "max": 10},
        {"type": "field_number", "name": "Y", "value": 0, "min": 0, "max": 10},
        {"type": "input_statement", "name": "TASKS"},
    ],
    output : null,
    colour: 100

};