const fs = require('fs');

const daytimeIcons = fs.readdirSync('./src/assets/icons/day');
const nighttimeIcons = fs.readdirSync('./src/assets/icons/night');

const generateAssetEntry = (dir) => {
  const entryFilePath = dir + '/index.js';
  if (fs.existsSync(entryFilePath)) {
    fs.unlinkSync(entryFilePath);
  }
  const icons = fs.readdirSync(dir);

  icons.forEach(icon => {
    const [iconCode] = icon.split('.');
    const importStatement = `import png${iconCode} from './${icon}';\n`;
    fs.appendFileSync(dir + '/index.ts', importStatement);
  });

  fs.appendFileSync(dir + '/index.ts', 'export default {\n');
  icons.forEach(icon => {
    const [iconCode] = icon.split('.');
    fs.appendFileSync(dir + '/index.ts', `  '${iconCode}': png${iconCode},\n`);
  });
  fs.appendFileSync(dir + '/index.ts', '}');
};

generateAssetEntry('./src/assets/icons/day');
generateAssetEntry('./src/assets/icons/night');


