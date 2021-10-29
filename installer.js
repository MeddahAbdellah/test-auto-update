const { exec } = require('pkg');

(async () => {
  await exec(['index.js', '--target', 'host', '--output', 'app.exe']);
})();
