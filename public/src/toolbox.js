
export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Mission',
      colour: 210,
      contents: [
        {
          kind: 'block',
          type: 'mission',
        }
      ],
    },
    {
      kind: 'category',
      name: 'SubMission',
      colour: 200,
      contents: [
        {
          kind: 'block',
          type: 'submission',
        }
      ],
    },
    {
      kind: 'category',
      name: 'Robot',
      colour: 100,
      contents: [
        {
          kind: 'block',
          type: 'robot',
        }
      ],
    },
    {
      kind: 'category',
      name: 'Robot Tasks',
      colour: 60,
      contents: [
        {
          kind: 'block',
          type: 'move',
        },
        {
          kind: 'block',
          type: 'grab',
        },
        {
          kind: 'block',
          type: 'drop',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Task Flows',
      colour: 290,
      contents: [
        {
          kind: 'block',
          type: 'fork',
        },
        {
          kind: 'block',
          type: 'merge',
        },
        {
          kind: 'block',
          type: 'wait',
        }
      ],
    },
    {
      kind: 'category',
      name: 'Objects',
      colour: 30,
      contents: [
        { kind: 'block', type: 'shelf' },
        { kind: 'block', type: 'submissionObject' },
      ]
    },
    {
      kind: 'category',
      name: 'Condition',
      colour: 180,
      contents: [
        { kind: 'block', type: 'if_condition' },
        { kind: 'block', type: 'if_else_condition' },
        { kind: 'block', type: 'and_condition' },
        { kind: 'block', type: 'or_condition' },
        { kind: 'block', type: 'objectCondition' },
        { kind: 'block', type: 'submissionCondition' }
      ]
    }

    ]
};
