const fs = require('fs');

function writeContents(file, tenor) {
  fs.writeFileSync(`./${ file }`, tenor);

  return 'ok';
};

module.exports = writeContents;
