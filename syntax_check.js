   function checkSyntax(code) {
    let numErrors = 0;
    const lines = code.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      try {
        eval(line);
      } catch (error) {
        numErrors++;
      }
    }
    console.log(`Total syntax error:  ${numErrors}`);
  }


const fs = require('fs');

fs.readFile('base_check.', 'utf-8', (err, data) => {
  if (err) throw err;
  const allLines = data.replace(/\r\n/g, '\n').split('\n').join('');
  checkSyntax(allLines);
});
