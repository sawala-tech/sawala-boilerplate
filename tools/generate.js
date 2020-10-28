#!/usr/bin/env node

const { generateTemplateFiles } = require('generate-template-files')


const execSync = require('child_process').execSync;
const output = execSync('npm root -g');
generateTemplateFiles([
  // Example of generating a single file
  {
    option: 'Nuxt',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: `${output}\\sawala-boilerplate\\tools\\frameworks\\nuxt`.replace(/(\r\n|\n|\r)/gm, ""),
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
