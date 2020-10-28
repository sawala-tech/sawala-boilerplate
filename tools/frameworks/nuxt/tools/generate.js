const { generateTemplateFiles } = require('generate-template-files')

generateTemplateFiles([
  // Example of generating a single file
  {
    option: 'Create a new component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/components/default.vue',
    },
    stringReplacers: [
      { question: 'Insert component name', slot: '__componentName__' },
    ],
    output: {
      path: './components/__componentName__(pascalCase).vue',
      pathAndFileNameDefaultCase: '(kebabCase)',
    },
  },
  {
    option: 'Create a new page',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/pages',
    },
    stringReplacers: [
      { question: 'Insert page name', slot: '__page__' },
      { question: 'Dynamic route name', slot: '__dynamic__' },
    ],
    output: {
      path: './pages/__page__(kebabCase)',
      pathAndFileNameDefaultCase: '(kebabCase)',
    },
    onComplete: async (results) => {
      console.log(`results`, results)
    },
  },
])
