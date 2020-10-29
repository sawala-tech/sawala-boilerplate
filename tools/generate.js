#!/usr/bin/env node

const { generateTemplateFiles } = require('generate-template-files')


const execSync = require('child_process').execSync;
const output = execSync('npm root -g');
let folderPath
if(process.platform === "win32") {
  folderPath = `${output}\\sawala-boilerplate\\tools\\frameworks\\nuxt`.replace(/(\r\n|\n|\r)/gm, "");
} else {
  folderPath = `${output}/sawala-boilerplate/tools/frameworks/nuxt`.replace(/(\r\n|\n|\r)/gm, "");
}
generateTemplateFiles([
  // Example of generating a single file
  {
    option: 'Nuxt',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: folderPath,
    },
    stringReplacers: [
        { question: 'Nama Project', slot: '__projectName__' },
        { question: 'Deskripsi Project', slot: '__projectDesc__' },
        { question: 'Install semua paket (Y/n)', slot: '__packageRunInstall__' },
    ],
    output: {
      path: './__projectName__(kebabCase)/',
      pathAndFileNameDefaultCase: '(kebabCase)',
    },
    onComplete: (results) => {
      // rename to dot files
      console.log('Menginstall nuxt...')
      execSync(`cd ${results.stringReplacers[0].slotValue} && npm install nuxt`)
      console.info('Sukses menginstall nuxt!')
      if(results.stringReplacers[2].slotValue.toLowerCase() === 'y' || results.stringReplacers[2].slotValue.toLowerCase() === 'yes') {
        console.log('Memulai instalasi paket...')
        execSync(`cd ${results.stringReplacers[0].slotValue} && npm install`)
        console.info(`Paket terinstall! coba command berikut: `)
        console.info(`cd ${results.stringReplacers[0].slotValue} && npm run dev`)
      }
    },
  },
])
