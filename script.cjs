
const extractStringsFromProject = require('i18n-ai-automation');
// Get the command-line arguments (locale codes like 'de', 'en', 'fr')
const args = process.argv.slice(2);  // Die gewünschten Sprachen des Benutzers
console.log('Locales:', args);

// Call the extraction function with the locales
extractStringsFromProject.extractStringsFromProject(args);
