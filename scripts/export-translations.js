import fs from 'fs';
import path from 'path';

const enPath = path.resolve('src/i18n/messages/en.json');
const arPath = path.resolve('src/i18n/messages/ar.json');
const outputPath = path.resolve('translations/translations.csv');

const flatten = (obj, prefix = '') => {
  const entries = {};
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(entries, flatten(value, newKey));
    } else if (Array.isArray(value)) {
      entries[newKey] = value.join(' | ');
    } else {
      entries[newKey] = value;
    }
  });
  return entries;
};

function main() {
  const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));

  const enFlat = flatten(en);
  const arFlat = flatten(ar);

  const allKeys = Array.from(new Set([...Object.keys(enFlat), ...Object.keys(arFlat)])).sort();
  const rows = [['key', 'en', 'ar']];

  allKeys.forEach((key) => {
    rows.push([
      key,
      (enFlat[key] ?? '').toString().replace(/\n/g, ' '),
      (arFlat[key] ?? '').toString().replace(/\n/g, ' ')
    ]);
  });

  const csv = rows
    .map((cols) =>
      cols
        .map((col) => {
          const safe = col.replace(/"/g, '""');
          return `"${safe}"`;
        })
        .join(',')
    )
    .join('\n');

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, csv, 'utf8');
  console.log(`Exported ${allKeys.length} keys to ${path.relative(process.cwd(), outputPath)}`);
}

main();
