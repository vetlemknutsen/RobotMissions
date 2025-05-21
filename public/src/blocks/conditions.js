export const shelfCondition = {
    type: "shelfCondition",
    message0: "%1 %2",
    args0: [
        {type: "input_value", name: "OBJECT", check: "shelf"},
        {type: "field_dropdown", name: "METHOD",
            options: [
                ["is empty", "isEmpty"],
                ["is full", "isFull"],
            ]
        }
    ],
    output: "Condition",
    colour: 180,
    tooltip: "Check a condition on an object"
};

export const submissionCondition = {
    type: "submissionCondition",
    message0: "%1 %2",
    args0: [
        {type: "input_value", name: "OBJECT", check: "submissionObject"},
        {type: "field_dropdown", name: "METHOD",
            options: [
                ["is finished", "isFinished"],
            ]
        }
    ],
    output: "Condition",
    colour: 180,
    tooltip: "Check a condition on a submission"
};

export const ifCondition = {
    type: "if_condition",
    message0: "If %1 then %2",
    args0: [
        { type: "input_value", name: "OBJECT", check: "Condition" },
        { type: "input_statement", name: "DO", check: ["Condition", "task"] }
    ],
    previousStatement: "robot",
    nextStatement: null,
    colour: 180
};

export const ifElseCondition = {
    type: "if_else_condition",
    message0: "If %1 then %2 else %3",
    args0: [
        { type: "input_value", name: "OBJECT", check: "Condition" },
        { type: "input_statement", name: "DO", check: ["Condition", "task"] },
        { type: "input_statement", name: "ELSE", check: ["Condition", "task"] }
    ],
    previousStatement: "robot",
    nextStatement: null,
    colour: 180
};

export const andCondition = {
    type: "and_condition",
    message0: "%1 and %2",
    args0: [
        { type: "input_value", name: "LEFT", check: "Condition" },
        { type: "input_value", name: "RIGHT", check: "Condition" }
    ],
    output: "Condition",
    colour: 180,
};

export const orCondition = {
    type: "or_condition",
    message0: "%1 or %2",
    args0: [
        { type: "input_value", name: "LEFT", check: "Condition" },
        { type: "input_value", name: "RIGHT", check: "Condition" }
    ],
    output: "Condition",
    colour: 180
};

export const wait = {
    type: "wait",
    message0: "Wait until %1",
    args0: [
        { type: "input_value", name: "CONDITION", check: "Condition"  }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180
};