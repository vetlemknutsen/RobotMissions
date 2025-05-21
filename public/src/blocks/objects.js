export const shelf = {
    type: "shelf",
    message0: "Shelf %1",
    args0: [
        { type: "field_input", name: "NAME", text: "A" }
    ],
    output: "shelf",
    colour: 30
};

export const submissionObject = {
    type: "submissionObject",
    message0: "Submission ID %1",
    args0: [
        {"type": "field_number", "name": "ID", "value": 0, "min": 0, "max": 10},
    ],
    output: "submissionObject",
    colour: 30
};