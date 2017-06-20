// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  //BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  //Quote,
  Slide
  //Table,
  //TableRow,
  //TableHeaderItem,
  //TableItem
  //Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  loaderProcessing: require("../images/loader-processing.png"),
  survivejs: require("../images/survivejs.png"),
  pwa1: require("../images/pwa1.png"),
  pwa2: require("../images/pwa2.png")
}, (v) => v.replace("/", ""));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Webpack - From Journeyman to Master
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://presentations.survivejs.com/webpack-from-apprentice-to-journeyman">
            <Heading size={1} fit>
              Check the previous presentation first
            </Heading>
          </Link>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Topics
          </Heading>
          <List>
            <Appear><ListItem>Optimizing</ListItem></Appear>
            <Appear><ListItem>Packaging</ListItem></Appear>
            <Appear><ListItem>Output</ListItem></Appear>
            <Appear><ListItem>Extending</ListItem></Appear>
            <Appear><ListItem>Techniques (bonus)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/optimizing" textColor="white">Optimizing</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Performance Budgets
          </Heading>
          <CodePane lang="javascript">
        {`{
  performance: {
    hints: 'warning', // 'error' or false are valid too
    maxEntrypointSize: 100000, // in bytes
    maxAssetSize: 100000, // in bytes
  },
},`}
          </CodePane>
          <List>
            <Appear><ListItem><b>Exercise:</b> Set up a performance budget</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Budget Warnings/Errors
          </Heading>
          <CodePane lang="javascript">
        {`...
WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds
the recommended limit (100 kB). This can impact web performance.
Entrypoints:
  app (156 kB)
      vendor.js
,      app.js
,      app.css
...`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/minifying">Minifying</Link>
          </Heading>
          <List>
            <Appear><ListItem>Minifying === How to convert code into a smaller form without losing anything essential?</ListItem></Appear>
            <Appear><ListItem>Certain unsafe transformations can <b>break</b> code</ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/webpack-contrib/uglifyjs-webpack-plugin">UglifyJs</Link>, <Link href="https://www.npmjs.com/package/babili-webpack-plugin">Babili</Link>, <Link href="https://www.npmjs.com/package/webpack-closure-compiler">Closure Compiler</Link></ListItem></Appear>
            <Appear><ListItem>CSS can be minified too through <Link href="https://www.npmjs.com/package/clean-css">clean-css</Link> and <Link href="http://cssnano.co">cssnano</Link></ListItem></Appear>
            <Appear><ListItem>Same for HTML. See <Link href="https://www.npmjs.com/package/posthtml">posthtml</Link></ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Set up <Link href="https://www.npmjs.com/package/babili-webpack-plugin">babili-webpack-plugin</Link> and study its implementation (can you see anything particular?)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/tree-shaking">Tree Shaking</Link>
          </Heading>
          <CodePane lang="javascript">
        {`const shake = () => console.log('shake');
const bake = () => console.log('bake');

export { shake, bake };`}
          </CodePane>
          <Layout>shake it with</Layout>
          <CodePane lang="javascript">
        {`import { bake } from './shake';

bake();`}
          </CodePane>
          <List>
            <Appear><ListItem><b>Exercise:</b> Set up a tree shaking demonstration as above</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/tree-shaking">Tree Shaking</Link>
          </Heading>
          <List>
            <Appear><ListItem>Relies on ES6 module definition</ListItem></Appear>
            <Appear><ListItem>If you author packages, set <code>module</code> field in <b>package.json</b>, precompile everything <b>except</b> module definitions</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/babel-plugin-transform-imports">babel-plugin-transform-imports</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/environment-variables">Environment Variables</Link>
          </Heading>
          <List>
            <Appear><ListItem><code>DefinePlugin</code> replaces free variables. Babel can do this</ListItem></Appear>
          </List>
          <Appear><CodePane lang="javascript">
        {`let foo;

// Not free due to "foo" above, not ok to replace
if (foo === 'bar') { ... }

// Free since you don't refer to "bar", ok to replace
if (process.env.NODE_ENV === 'development') {
  console.log('bar');
}`}
          </CodePane></Appear>
          <List>
            <Appear><ListItem><b>Exercise:</b> Set up <code>DefinePlugin</code> and free variables as above</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames">Adding Hashes to Filenames</Link>
          </Heading>
          <List>
            <Appear><ListItem>Integrating a hash to a filename allows cache busting</ListItem></Appear>
            <Appear><ListItem>Example: <code>app.d587bbd6e38337f5accd.js</code></ListItem></Appear>
            <Appear><ListItem>Common placeholders: <code>[name]</code>, <code>[ext]</code>, <code>[chunkhash]</code>, <code>[contenthash]</code> (<code>ExtractTextPlugin</code> only)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Placeholders
          </Heading>
          <CodePane lang="javascript">
        {`{
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
  },
},`}
          </CodePane>
          <List>
            <Appear><ListItem><b>Exercise:</b> Add hashing to filenames</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Module Ids
          </Heading>
          <List>
            <Appear><ListItem>Modules use numbered ids by default (0, 1, 2, ...)</ListItem></Appear>
            <Appear><ListItem><code>NamedModulesPlugin</code> returns paths to modules (useful for development!)</ListItem></Appear>
            <Appear><ListItem><code>HashedModuleIdsPlugin</code> is the same except it hashes the paths (useful for production!)</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Add <code>NamedModulesPlugin</code> for development</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Add <code>HashedModuleIdsPlugin</code> for production</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/separating-manifest">Separating a Manifest</Link>
          </Heading>
          <List>
            <Appear><ListItem>Webpack generates a <b>manifest</b> to keep track of entries</ListItem></Appear>
            <Appear><ListItem>Manifest in a <b>vendor</b> bundle can lead to invalidation if <b>app</b> bundle changes!</ListItem></Appear>
            <Appear><ListItem>Extract to a file or inline to HTML through a plugin</ListItem></Appear>
            <Appear><ListItem><code>CommonsChunkPlugin</code> can do the job</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Separate manifest</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Records
          </Heading>
          <List>
            <Appear><ListItem>Records allow to <b>keep track of module IDs</b> across builds</ListItem></Appear>
            <Appear><ListItem>Problem: you have a new file (<b>records.json</b>) to manage</ListItem></Appear>
            <Appear><ListItem><Link href="https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31">Alternative name based approach by Tim Sebastian</Link></ListItem></Appear>
          </List>
          <Appear><CodePane lang="javascript">
        {`{
  recordsPath: path.join(__dirname, 'records.json'),
},`}
          </CodePane></Appear>
          <List>
            <Appear><ListItem><b>Exercise:</b> Set up records</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Study {`Tim's`} approach and implement it*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/performance">Performance</Link>
          </Heading>
          <List>
            <Appear><ListItem>Parallelism through <Link href="https://www.npmjs.com/package/parallel-webpack">parallel-webpack</Link> and <Link href="https://www.npmjs.com/package/happypack">happypack</Link></ListItem></Appear>
            <Appear><ListItem>Consider <b>faster source map variants</b> or skipping even</ListItem></Appear>
            <Appear><ListItem><b>Skip polyfills</b> during development</ListItem></Appear>
            <Appear><ListItem><b>Disable portions</b> of an application you {"don't"} need</ListItem></Appear>
            <Appear><ListItem>Use <b>DLLs</b> for vendor dependencies (less to rebundle)</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Set up Babel to do less work during development</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Try <Link href="https://www.npmjs.com/package/happypack">happypack</Link> with Babel*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/packages" textColor="white">Packaging</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Understanding SemVer
          </Heading>
          <List>
            <Appear><ListItem>SemVer - <code>major.minor.patch</code></ListItem></Appear>
            <Appear><ListItem>ComVer - <code>notCompatible.compatible</code></ListItem></Appear>
            <Appear><ListItem>EmoVer - <code>emotional.notEmotional</code></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/packages/consuming">Consuming Packages</Link>
          </Heading>
          <List>
            <Appear><ListItem>Take care with version ranges</ListItem></Appear>
            <Appear><ListItem>Lock dependencies - Yarn <code>lockfile</code>, npm <code>shrinkwrap</code></ListItem></Appear>
            <Appear><ListItem>Keep dependencies up to date ({"there's"} tooling for this)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <Link href="https://survivejs.com/webpack/packages/consuming-techniques/">Consuming Packages with Webpack</Link>
          </Heading>
          <List>
            <Appear><ListItem>Patch faulty dependencies through <code>resolve</code> fields</ListItem></Appear>
            <Appear><ListItem>Mark packages you want to load otherwise as <code>externals</code></ListItem></Appear>
            <Appear><ListItem>Globals - <Link href="https://www.npmjs.com/package/imports-loader">imports-loader</Link>, <Link href="https://www.npmjs.com/package/expose-loader">expose-loader</Link>, and <code>ProvidePlugin</code></ListItem></Appear>
            <Appear><ListItem>Use <code>IgnorePlugin</code> to skip unnecessary modules or patch with <code>ContextReplacementPlugin</code></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/packages/authoring">Authoring Packages</Link>
          </Heading>
          <List>
            <Appear><ListItem>Maintain high quality metadata for your packages</ListItem></Appear>
            <Appear><ListItem>Publishing is easy but take care (SemVer again)</ListItem></Appear>
            <Appear><ListItem>Publish only what is needed</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/semantic-release">semantic-release</Link>, <Link href="https://www.npmjs.com/package/dont-break">dont-break</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <Link href="https://survivejs.com/webpack/packages/authoring-techniques">Authoring Packages with Webpack</Link>
          </Heading>
          <List>
            <Appear><ListItem>Avoid bundling dependencies to distribution bundle if you generate one through <code>externals</code></ListItem></Appear>
            <Appear><ListItem>Babel can generate a Node friendly build (separate files)</ListItem></Appear>
            <Appear><ListItem>If you consume from Git, write a <code>postinstall</code> script</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Understand <b>SemVer</b> but also <b>lock</b> your dependencies</ListItem></Appear>
            <Appear><ListItem>Keep dependencies up to date through tooling. Remember to test well for regressions</ListItem></Appear>
            <Appear><ListItem>Patch faulty dependencies through <code>resolve</code> options</ListItem></Appear>
            <Appear><ListItem>There are specific loaders and plugins to help with globals</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Maintain high quality metadata for your packages</ListItem></Appear>
            <Appear><ListItem>Take care when publishing (do not break SemVer, publish only what is needed, automate)</ListItem></Appear>
            <Appear><ListItem>Skip bundling <code>externals</code>, consider Babel build, <code>postinstall</code></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/output" textColor="white">Output</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/targets">Build Targets</Link>
          </Heading>
          <List>
            <Appear><ListItem>Not just web (default)</ListItem></Appear>
            <Appear><ListItem><code>webworker</code> (no hashing, no DOM manipulation)</ListItem></Appear>
            <Appear><ListItem><code>node</code> and <code>node-async</code> - Server Side Rendering</ListItem></Appear>
            <Appear><ListItem>Desktop targets: <code>node-webkit</code>, <code>electron</code> targets</ListItem></Appear>
            <Appear><ListItem>Library targets (UMD etc.)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/bundling-libraries">Bundling Libraries</Link>
          </Heading>
          <List>
            <Appear><ListItem>Webpack supports multiple library output options (<code>output</code>)</ListItem></Appear>
            <Appear><ListItem><b>UMD</b> is the most generic output target (CommonJS, AMD, global in one)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/library-output">Library Output</Link>
          </Heading>
          <List>
            <Appear><ListItem>Controlled primarily through <code>output.library</code> and <code>output.libraryTarget</code></ListItem></Appear>
            <Appear><ListItem>Defaults to <code>var</code>. Other options include <code>window</code>, <code>commonjs</code>, <code>amd</code>, <code>umd</code>, and <code>jsonp</code></ListItem></Appear>
            <Appear><ListItem>SystemJS compatible output is possible through <Link href="https://www.npmjs.com/package/webpack-system-register">webpack-system-register</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/multiple-pages">Multiple Pages</Link>
          </Heading>
          <List>
            <Appear><ListItem>Separate configurations (multi-compiler mode), separate entries, <Link href="https://developers.google.com/web/progressive-web-apps/">Progressive Web Applications</Link> (PWA)</ListItem></Appear>
            <Appear><ListItem><code>HtmlWebpackPlugin</code> can do it</ListItem></Appear>
            <Appear><ListItem>Separate entries allow code sharing and <Link href="https://github.com/webpack/webpack-pwa">PWA</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://developers.google.com/web/showcase/2017/twitter">Twitter Lite PWA case study</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://workboxjs.org/">Workbox, a PWA starting point</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://github.com/webpack/webpack-pwa">PWA - App Shell</Link>
          </Heading>
          <Image src={images.pwa1} margin="40px auto" height="444px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://github.com/webpack/webpack-pwa">PWA - Page Shell</Link>
          </Heading>
          <Image src={images.pwa2} margin="40px auto" height="444px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/server-side-rendering">Server Side Rendering</Link>
          </Heading>
          <List>
            <Appear><ListItem>Serve initial HTML, data payload instead of only SPA</ListItem></Appear>
            <Appear><ListItem>Potential for better performance and <b>Search Engine Optimization</b> (SEO) benefits</ListItem></Appear>
            <Appear><ListItem>Comes with technical complexity (how to handle styling, routing, frontend specific features)</ListItem></Appear>
            <Appear><ListItem>Higher level abstractions: <Link href="https://www.npmjs.com/package/next">Next.js</Link>, <Link href="https://www.npmjs.com/package/isomorphic-webpack">isomorphic-webpack</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Not just web, also other <b>targets</b></ListItem></Appear>
            <Appear><ListItem>Multiple options for <b>library</b> authors</ListItem></Appear>
            <Appear><ListItem>Multi-page setups are possible, PWAs the next step?</ListItem></Appear>
            <Appear><ListItem>SSR with webpack in front or also in server</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/extending" textColor="white">Extending</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/extending/loaders">Extending with Loaders</Link>
          </Heading>
          <List>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/loader-runner">loader-runner</Link> is a starting point</ListItem></Appear>
            <Appear><ListItem>Run against webpack to match environment (differs a little)</ListItem></Appear>
            <Appear><ListItem><code>module.exports = input => input + input;</code></ListItem></Appear>
            <Appear><ListItem>Both sync and async loaders are possible</ListItem></Appear>
            <Appear><ListItem>pitch/execute === capture/bubble</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Loader Processing
          </Heading>
          <Image src={images.loaderProcessing} margin="40px auto" height="444px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Running Loaders
          </Heading>
          <CodePane lang="javascript">
        {`const fs = require('fs');
const { runLoaders } = require('loader-runner');

runLoaders({
  resource: './demo.txt',
  loaders: [
    path.resolve(__dirname, './loaders/demo-loader'),
  ],
  readResource: fs.readFile.bind(fs),
},
(err, result) => err ?
  console.error(err) :
  console.log(result)
);`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Example Output
          </Heading>
          <CodePane lang="javascript">
        {`{ result: [ 'foobar\nfoobar\n' ],
  resourceBuffer: <Buffer 66 6f 6f 62 61 72 0a>,
  cacheable: true,
  fileDependencies: [ './demo.txt' ],
  contextDependencies: [] }`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Loader API
          </Heading>
          <List>
            <Appear><ListItem>Examples: <code>this.async()</code>, <code>this.emitFile(url, content)</code></ListItem></Appear>
            <Appear><ListItem>Helpers in <Link href="https://www.npmjs.com/package/loader-utils">loader-utils</Link> and <Link href="https://www.npmjs.com/package/schema-utils">schema-utils</Link></ListItem></Appear>
            <Appear><ListItem>Consider using <Link href="https://www.npmjs.com/package/webpack-defaults">webpack-defaults</Link> as a starting point</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/extending/plugins">Extending with Plugins</Link>
          </Heading>
          <List>
            <Appear><ListItem>Plugins provide access to <code>compiler</code> and <code>compilation</code></ListItem></Appear>
            <Appear><ListItem>Webpack itself is a collection of plugins (<Link href="https://www.npmjs.com/package/tapable">tapable</Link>)</ListItem></Appear>
            <Appear><ListItem>Development has to happen against webpack itself</ListItem></Appear>
            <Appear><ListItem><code>compilation.warnings</code>, <code>compilation.errors</code></ListItem></Appear>
            <Appear><ListItem>Plugins can have plugins too: <code>HtmlWebpackPlugin</code></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Plugin Example
          </Heading>
          <CodePane lang="javascript">
        {`module.exports = class DemoPlugin {
  constructor(options) {
    this.options = options;
  }
  apply() {
    console.log('apply', this.options);
  }
};`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Writing Files with a Plugin
          </Heading>
          <CodePane lang="javascript">
        {`const { RawSource } = require('webpack-sources');

module.exports = class DemoPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    const { name } = this.options;

    compiler.plugin('emit', (compilation, cb) => {
      console.log(compilation);

      compilation.assets[name] = new RawSource('demo');

      cb();
    });
  }
};`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Loaders are a good starting point</ListItem></Appear>
            <Appear><ListItem>Event model follows the DOM (capture/bubble)</ListItem></Appear>
            <Appear><ListItem>Sync/async processing possible. Enough for basic transformations.</ListItem></Appear>
            <Appear><ListItem>Plugins give greater access through <b>runtime hooks</b> (<code>compiler</code>, <code>compilation</code>)</ListItem></Appear>
            <Appear><ListItem>Plugins can have plugins too</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/techniques" textColor="white">Techniques</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/dynamic-loading">Dynamic Loading</Link>
          </Heading>
          <CodePane lang="javascript">
        {`// Load .md files recursively. false to skip recursion.
const req = require.context('./pages', true, /^\.\/.*\.md$/);

req.keys(); // ['./demo.md', './another-demo.md']
req.id; // 42

// {title: 'Demo', body: '# Demo page\\ncontent'}
const demoPage = req('./demo.md');`}
          </CodePane>
          <Appear><div>Partial imports are possible too</div></Appear>
          <Appear><CodePane lang="javascript">
        {`const target = 'fi'
import(\`translations/\$\{target\}.json\`).then(...).catch(...);`}
          </CodePane></Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/web-workers">Web Workers</Link>
          </Heading>
          <div>Host</div>
          <CodePane lang="javascript">
      {`import Worker from 'worker-loader!./worker';

const worker = new Worker();
worker.addEventListener(
  'message',
  ({ data: { text } }) => console.log(\`Received message: \$\{text\}\`)
);
worker.postMessage({ text: 'Hello world' });`}
          </CodePane>
          <Appear><div>Worker</div></Appear>
          <Appear><CodePane lang="javascript">
      {`self.onmessage = ({ data: { text } }) => (
  self.postMessage({ text: text + text })
);`}
          </CodePane></Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/i18n">Internationalization</Link>
          </Heading>
          <List>
            <Appear><ListItem>i18n vs. l10n</ListItem></Appear>
            <Appear><ListItem>Static or dynamic? How to translate?</ListItem></Appear>
            <Appear><ListItem><code>I18nWebpackPlugin</code> and others</ListItem></Appear>
            <Appear><ListItem><code>console.log(__('Hello world'));</code></ListItem></Appear>
          </List>
          <Appear><CodePane lang="json">
                  {`{
  "Hello world": "Terve maailma"
}`}
          </CodePane></Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/testing">Testing</Link>
          </Heading>
          <List>
            <Appear><ListItem>Integration with Mocha, Karma, and others</ListItem></Appear>
            <Appear><ListItem>Consider generating <b>coverage</b> reports</ListItem></Appear>
            <Appear><ListItem>Jest - Minimal setup, webpack specific features need care</ListItem></Appear>
            <Appear><ListItem><b>Mock</b> through <Link href="https://www.npmjs.com/package/sinon">Sinon</Link>, <Link href="https://www.npmjs.com/package/inject-loader">inject-loader</Link>, and <Link href="https://www.npmjs.com/package/rewire-webpack">rewire-webpack</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/deploying">Deploying Applications</Link>
          </Heading>
          <List>
            <Appear><ListItem>Handle with or without webpack</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/gh-pages">gh-pages</Link> is handy for small projects that deploy to Git</ListItem></Appear>
            <Appear><ListItem>Plugins for deploying to S3 and other environments</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem><b>Dynamic loading</b> for extra flexibility</ListItem></Appear>
            <Appear><ListItem><b>Web workers</b> through a loader</ListItem></Appear>
            <Appear><ListItem>Multiple options for <b>i18n</b></ListItem></Appear>
            <Appear><ListItem>Interation with multiple <b>testing</b> tools</ListItem></Appear>
            <Appear><ListItem><b>Deploy</b> with or without webpack</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>
              SurviveJS
            </Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
        </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
