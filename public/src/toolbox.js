
export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Mission',
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
      contents: [
        { kind: 'block', type: 'shelf' },
      ]
    },
    {
      kind: 'category',
      name: 'Condition',
      contents: [
        { kind: 'block', type: 'isEmpty' }
      ]
    }

    ]
};
