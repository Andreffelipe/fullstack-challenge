
import fs from 'fs';
import path from 'path';

export function updateConfig (page: number) {
  fs.readFile(path.resolve(__dirname, '..', 'config', 'config.json'), 'utf8', function readFileCallback (err, data) {
    if (err) {
      console.log(err);
    } else {
      let config = JSON.parse(data);
      config.page = Number(page) + 1;
      fs.writeFile(path.resolve(__dirname, '..', 'config', 'config.json'), JSON.stringify(config), 'utf8', (err) => {
        if (err) throw err;
        console.log('file has been saved!');
      }); // write it back
    }
  });
}
