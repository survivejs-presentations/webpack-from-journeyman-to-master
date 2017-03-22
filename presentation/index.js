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
  survivejs: require("../images/survivejs.png")
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
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Budget Warnings
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
            <Appear><ListItem>Certain unsafe transformations can break code</ListItem></Appear>
            <Appear><ListItem><code>UglifyJsPlugin</code>, <Link href="https://www.npmjs.com/package/babili-webpack-plugin">babili-webpack-plugin</Link>, <Link href="https://www.npmjs.com/package/webpack-closure-compiler">webpack-closure-compiler</Link></ListItem></Appear>
            <Appear><ListItem>CSS can be minified too through <Link href="https://www.npmjs.com/package/clean-css">clean-css</Link> and <Link href="http://cssnano.co">cssnano</Link></ListItem></Appear>
            <Appear><ListItem>Same for HTML. See <Link href="https://www.npmjs.com/package/posthtml">posthtml</Link></ListItem></Appear>
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
          <Layout>shaking</Layout>
          <CodePane lang="javascript">
        {`import { bake } from './shake';

bake();`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Tree Shaking cont.
          </Heading>
          <List>
            <Appear><ListItem>Relies on ES6 module definition</ListItem></Appear>
            <Appear><ListItem>Potentially possible for <Link href="https://github.com/simlrh/dead-css-loader">CSS Modules</Link> too</ListItem></Appear>
            <Appear><ListItem>If you author packages, set <code>module</code> field in <b>package.json</b>, precompile everything except module definitions</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/setting-environment-variables">Setting Environment Variables</Link>
          </Heading>
          <CodePane lang="javascript">
        {`var foo;

// Not free due to "foo" above, not ok to replace
if (foo === 'bar') {
  console.log('bar');
}

// Free since you don't refer to "bar", ok to replace
// Depending on "bar" is replaced, you'll get true/false
// Minifier will drop if(false)
if (bar === 'bar') {
  console.log('bar');
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Setting Environment Variables cont.
          </Heading>
          <List>
            <Appear><ListItem><code>DefinePlugin</code> can replace free variables</ListItem></Appear>
            <Appear><ListItem><code>EnvironmentPlugin</code> does the same based on Node environment</ListItem></Appear>
            <Appear><ListItem>Possible through Babel too</ListItem></Appear>
            <Appear><ListItem>Enables patterns like choosing a module based on build target</ListItem></Appear>
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
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames">Adding Hashes to Filenames</Link>
          </Heading>
          <List>
            <Appear><ListItem>Integrating a hash to a filename allow cache busting</ListItem></Appear>
            <Appear><ListItem>Example: <code>app.d587bbd6e38337f5accd.js</code></ListItem></Appear>
            <Appear><ListItem>Common placeholders: <code>[name]</code>, <code>[ext]</code>, <code>[chunkhash]</code>, <code>[contenthash]</code> (<code>ExtractTextPlugin</code> only)</ListItem></Appear>
            <Appear><ListItem>Use <code>HashedModuleIdsPlugin</code> for stable module ids</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/separating-manifest">Separating a Manifest</Link>
          </Heading>
          <List>
            <Appear><ListItem>Webpack generates a <b>manifest</b> to keep track of entries</ListItem></Appear>
            <Appear><ListItem>Including this to a <b>vendor</b> bundle can lead to invalidation if <b>app</b> bundle changes</ListItem></Appear>
            <Appear><ListItem>It is better to extract it to file of its own or to inline it to HTML through a plugin</ListItem></Appear>
            <Appear><ListItem><code>CommonsChunkPlugin</code> can do the job</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Records
          </Heading>
          <List>
            <Appear><ListItem>Records allow webpack to keep track of module ids across builds</ListItem></Appear>
            <Appear><ListItem>Necessary if you use code splitting</ListItem></Appear>
            <Appear><ListItem>Problem: you have a new file (<b>records.json</b>) to manage</ListItem></Appear>
          </List>
          <Appear><CodePane lang="javascript">
        {`{
  recordsPath: 'records.json',
},`}
          </CodePane></Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/analyzing-build-statistics">Analyzing Build Statistics</Link>
          </Heading>
          <List>
            <Appear><ListItem>To know what your build consists of, generate <b>build statistics</b></ListItem></Appear>
            <Appear><ListItem>Use <code>--json</code> for statistics</ListItem></Appear>
            <Appear><ListItem>Use <code>--profile</code> to capture timing information</ListItem></Appear>
            <Appear><ListItem>Node API gives access to statistics too and you can find a couple of plugins</ListItem></Appear>
            <Appear><ListItem>Plenty of tools for analysis</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/performance">Performance</Link>
          </Heading>
          <List>
            <Appear><ListItem>Know what to optimize</ListItem></Appear>
            <Appear><ListItem>Fast to implement tweaks first</ListItem></Appear>
            <Appear><ListItem>More involved tweaks after</ListItem></Appear>
            <Appear><ListItem>Measure impact</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/performance">Performance cont.</Link>
          </Heading>
          <List>
            <Appear><ListItem>Parallelism through <Link href="https://www.npmjs.com/package/parallel-webpack">parallel-webpack</Link and <Link href="https://www.npmjs.com/package/happypack">happypack</Link></ListItem></Appear>
            <Appear><ListItem>Consider faster source map variants or skipping even (new browsers)</ListItem></Appear>
            <Appear><ListItem>Skip polyfills during development</ListItem></Appear>
            <Appear><ListItem>Disable portions of an application you {"don't"} need</ListItem></Appear>
            <Appear><ListItem>Use DLLS for vendor dependencies (less to rebundle)</ListItem></Appear>
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
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/library-output">Library Output</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/multiple-pages">Multiple Pages</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/server-side-rendering">Server Side Rendering</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
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
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/web-workers">Web Workers</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/i18n">Internationalization</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/testing">Testing</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/deploying">Deploying Applications</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/packages" textColor="white">Packages</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/packages/consuming">Consuming Packages</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/packages/authoring">Authoring Packages</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
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
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/extending/plugins">Extending with Plugins</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
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
