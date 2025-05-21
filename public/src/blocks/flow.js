export const fork = {
    type: "fork",
    message0: "Fork tasks %1 %2",
    args0: [
        { type: "input_statement", name: "BRANCH1", check: null },
        { type: "input_statement", name: "BRANCH2", check: null }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 290
};

export const merge = {
    type: "merge",
    message0: "Merge tasks",
    previousStatement: null,
    nextStatement: null,
    colour: 290
};


