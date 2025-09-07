const { program } = require('commander');

program
  .command('init')
  .description('Initiiert ein neues Versionsverwaltungstool-Projekt')
  .action(() => {
    console.log('Projekt wurde initialisiert!');
  });

program.parse(process.argv);