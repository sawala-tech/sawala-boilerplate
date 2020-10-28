#!/usr/bin/env node

const { generateTemplateFiles } = require('generate-template-files')

generateTemplateFiles([
  // Example of generating a single file
  {
    option: 'Nuxt',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/frameworks/nuxt',
    },
    stringReplacers: [
        { question: 'Nama Project', slot: '__projectName__' },
        { question: 'Deskripsi Project', slot: '__projectDesc__' },

    ],
    output: {
      path: './__projectName__(kebabCase)/',
      pathAndFileNameDefaultCase: '(kebabCase)',
    },
  },
])
