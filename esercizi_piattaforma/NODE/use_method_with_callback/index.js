import fs from 'node:fs';

fs.writeFile('file.txt', 'content', (err) => {
  if (err) {
    console.error(err);
  }
});
