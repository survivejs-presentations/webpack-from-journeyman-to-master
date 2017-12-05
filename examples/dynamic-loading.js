// Load .md files recursively. false to skip recursion.
const req = require.context("./pages", true, /^\.\/.*\.md$/);

req.keys(); // ['./demo.md', './another-demo.md']
req.id; // 42

// {title: 'Demo', body: '# Demo page\\ncontent'}
const demoPage = req("./demo.md");
