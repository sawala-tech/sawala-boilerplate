#!/usr/bin/env node

const { generateTemplateFiles } = require('generate-template-files')


const execSync = require('child_process').execSync;
const output = execSync('npm root -g', { encoding: 'utf-8' });

generateTemplateFiles([
  // Example of generating a single file
  {
    option: 'Nuxt',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: output+'\tools\frameworks\nuxt',
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
