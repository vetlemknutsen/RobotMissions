
export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Robot Commands',
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
      name: 'Environment',
      contents: [
        {
          kind: 'block',
          type: 'environment',
        }
      ],
    }
    ]
};
