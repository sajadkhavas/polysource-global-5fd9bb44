import fs from 'fs';
import path from 'path';
import ts from 'typescript';

const SRC_DIR = path.resolve('src');
const IGNORE_DIRS = new Set(['node_modules', '.git', 'dist', 'build']);
const IGNORE_FILES = ['.d.ts'];
const TEXTUAL_PROPS = new Set([
  'className',
  'id',
  'variant',
  'size',
  'stroke',
  'fill',
  'width',
  'height',
  'viewBox',
  'xmlns',
  'name',
  'value',
  'type',
  'color',
  'alt',
  'src',
  'to',
  'href',
  'key'
]);

const translationPaths = ['i18n/messages/en.json', 'i18n/messages/ar.json'];

function shouldSkipFile(filePath) {
  if (!filePath.startsWith(SRC_DIR)) return true;
  if (translationPaths.some((partial) => filePath.includes(partial))) return true;
  return IGNORE_FILES.some((suffix) => filePath.endsWith(suffix));
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile()) {
      processFile(fullPath);
    }
  }
}

function isLikelyHardcoded(text) {
  const hasLatin = /[A-Za-z]/.test(text);
  if (!hasLatin) return false;
  if (text.length <= 2) return false;
  if (/^[A-Za-z0-9_.-]+$/.test(text)) return false; // likely a key or token
  return true;
}

function processFile(filePath) {
  if (shouldSkipFile(filePath)) return;
  const sourceText = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true);

  function visit(node) {
    if (ts.isStringLiteralLike(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const text = node.text.trim();
      if (!isLikelyHardcoded(text)) return;

      const parent = node.parent;
      if (
        ts.isImportDeclaration(parent) ||
        ts.isExportDeclaration(parent) ||
        ts.isModuleDeclaration(parent)
      ) {
        return;
      }

      if (ts.isJsxAttribute(parent)) {
        const propName = parent.name.getText();
        if (TEXTUAL_PROPS.has(propName)) return;
      }

      const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart());
      findings.push({ filePath, line: line + 1, column: character + 1, text });
    }
    ts.forEachChild(node, visit);
  }

  ts.forEachChild(sourceFile, visit);
}

const findings = [];
walk(SRC_DIR);

if (findings.length) {
  console.log('Hardcoded English-like strings detected (consider adding to i18n):');
  findings.forEach(({ filePath, line, column, text }) => {
    console.log(`- ${path.relative(process.cwd(), filePath)}:${line}:${column} -> "${text}"`);
  });
  process.exitCode = 1;
} else {
  console.log('No hardcoded English strings detected.');
}
