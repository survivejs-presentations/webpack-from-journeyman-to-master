// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  //Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  Quote,
  Slide,
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
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    loaderProcessing: require("../images/loader-processing.png"),
    survivejs: require("../images/survivejs.png"),
    pwa1: require("../images/pwa1.png"),
    pwa2: require("../images/pwa2.png"),
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quarternary: "rgba(255, 219, 169, 0.43)",
});
theme.screen.components.codePane.fontSize = "60%";

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
          <Heading size={2}>Topics</Heading>
          <List>
            <Appear>
              <ListItem>Optimizing</ListItem>
            </Appear>
            <Appear>
              <ListItem>Output</ListItem>
            </Appear>
            <Appear>
              <ListItem>Techniques</ListItem>
            </Appear>
            <Appear>
              <ListItem>Extending</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/optimizing"
              textColor="white"
            >
              Optimizing
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Performance Budgets</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/budget-1.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Budget Warnings/Errors</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/budget-2.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up a performance budget
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>
              Minifying === How to convert code into a smaller form without
              losing anything essential?
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/minifying">
              Minifying
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Certain unsafe transformations can <b>break</b> code
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/uglifyjs-webpack-plugin">
                  UglifyJs
                </Link>,{" "}
                <Link href="https://www.npmjs.com/package/babel-minify-webpack-plugin">
                  babel-minify-webpack-plugin
                </Link>,{" "}
                <Link href="https://www.npmjs.com/package/webpack-closure-compiler">
                  Closure Compiler
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                CSS can be minified too through{" "}
                <Link href="https://www.npmjs.com/package/clean-css">
                  clean-css
                </Link>{" "}
                and <Link href="http://cssnano.co">cssnano</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Same for HTML. See{" "}
                <Link href="https://www.npmjs.com/package/posthtml">
                  posthtml
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up{" "}
                <Link href="https://www.npmjs.com/package/uglifyjs-webpack-plugin">
                  uglifyjs-webpack-plugin
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/tree-shaking">
              Tree Shaking
            </Link>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/tree-1.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <div>shake it with</div>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/tree-2.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/tree-shaking">
              Tree Shaking
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>Relies on ES6 module definition</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                If you author packages, set <code>module</code> field in{" "}
                <b>package.json</b>, precompile everything <b>except</b> module
                definitions
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/babel-plugin-transform-imports">
                  babel-plugin-transform-imports
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up a tree shaking demonstration as in the
                example and examine the output
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/environment-variables">
              Feature Flags
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <code>DefinePlugin</code> replaces free variables. Babel can do
                this too
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/define.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
          <List>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up <code>DefinePlugin</code> and replace as
                above
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames">
              Adding Hashes to Filenames
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Integrating a hash to a filename allows cache busting
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Example: <code>app.d587bbd6e38337f5accd.js</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Common placeholders: <code>[name]</code>, <code>[ext]</code>,{" "}
                <code>[chunkhash]</code>, <code>[contenthash]</code> (<code>
                  ExtractTextPlugin
                </code>{" "}
                only)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Placeholders</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/placeholders.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Add hashing to filenames
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Module Ids</Heading>
          <List>
            <Appear>
              <ListItem>
                Modules use numbered ids by default (0, 1, 2, ...)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>NamedModulesPlugin</code> returns paths to modules
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>HashedModuleIdsPlugin</code> is the same except it hashes
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Add <code>NamedModulesPlugin</code> to the
                setup
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/separating-manifest">
              Separating a Manifest
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Webpack generates a <b>manifest</b> to keep track of entries
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Manifest in a <b>vendor</b> bundle can lead to invalidation if{" "}
                <b>app</b> bundle changes!
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Extract to a file or inline to HTML through a plugin
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>CommonsChunkPlugin</code> can do the job
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Separate a manifest
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Records</Heading>
          <List>
            <Appear>
              <ListItem>
                Records allow to <b>keep track of module IDs</b> across builds
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/records.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>

          <List>
            <Appear>
              <ListItem>
                Problem: you have a new file (<b>records.json</b>) to manage
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31">
                  Alternative name based approach by Tim Sebastian
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up records
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Study {"Tim's"} approach and implement it*
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/performance">
              Performance
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Parallelism through{" "}
                <Link href="https://www.npmjs.com/package/parallel-webpack">
                  parallel-webpack
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/happypack">
                  happypack
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Consider <b>faster source map variants</b> or skipping even
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Skip polyfills</b> during development
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Disable portions</b> of an application you {"don't"} need
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <b>DLLs</b> for vendor dependencies (less to rebundle)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up Babel to do less work during development
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Try{" "}
                <Link href="https://www.npmjs.com/package/happypack">
                  happypack
                </Link>{" "}
                with Babel*
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/output" textColor="white">
              Output
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/targets">
              Build Targets
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>Not just web (default)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>webworker</code> (no hashing, no DOM manipulation)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>node</code> and <code>async-node</code> - Server Side
                Rendering
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Desktop targets: <code>node-webkit</code>, <code>electron</code>{" "}
                targets
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Library targets (UMD etc.)</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Bundling Libraries</Heading>
          <List>
            <Appear>
              <ListItem>
                Webpack supports multiple library output options (<code>
                  output
                </code>)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>UMD</b> is the most generic output target (CommonJS, AMD,
                global in one)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                No pure ES2015 output option yet. Use Babel or some other option
                instead.
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/multiple-pages">
              Multiple Pages
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Separate configurations (multi-compiler mode), separate entries,{" "}
                <Link href="https://developers.google.com/web/progressive-web-apps/">
                  Progressive Web Applications
                </Link>{" "}
                (PWA)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>HtmlWebpackPlugin</code> can do it
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up a multi-page build as in the book
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/multiple-pages">
              Progressive Web Apps
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Separate entries allow code sharing and{" "}
                <Link href="https://github.com/webpack/webpack-pwa">PWA</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://developers.google.com/web/showcase/2017/twitter">
                  Twitter Lite PWA case study
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Study{" "}
                <Link href="https://github.com/webpack/webpack-pwa">
                  webpack-pwa
                </Link>{" "}
                example and examine the setup
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://github.com/webpack/webpack-pwa">
              PWA - App Shell
            </Link>
          </Heading>
          <Image src={images.pwa1} margin="40px auto" height="444px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://github.com/webpack/webpack-pwa">
              PWA - Page Shell
            </Link>
          </Heading>
          <Image src={images.pwa2} margin="40px auto" height="444px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/server-side-rendering">
              Server Side Rendering
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Serve initial HTML, data payload instead of only SPA
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Potential for better performance and{" "}
                <b>Search Engine Optimization</b> (SEO) benefits
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Comes with technical complexity (how to handle styling, routing,
                frontend specific features)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Higher level abstractions:{" "}
                <Link href="https://www.npmjs.com/package/next">Next.js</Link>,{" "}
                <Link href="https://www.npmjs.com/package/isomorphic-webpack">
                  isomorphic-webpack
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Go through{" "}
                <Link href="https://survivejs.com/webpack/output/server-side-rendering/">
                  the book SSR tutorial
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Compile server code through webpack as well*
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Recap</Heading>
          <List>
            <Appear>
              <ListItem>
                Not just web, also other <b>targets</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Multi-page setups are possible, PWAs the next step?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                SSR with webpack in front or also in the server
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/techniques"
              textColor="white"
            >
              Techniques
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/dynamic-loading/">
              Dynamic Loading
            </Link>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/dynamic-loading.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <Appear>
            <div>Partial imports are possible too</div>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/partial-import.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/web-workers">
              Web Workers
            </Link>
          </Heading>
          <div>Host</div>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/worker-1.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <Appear>
            <div>Worker</div>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/worker-2.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/i18n/">
              Internationalization
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>i18n vs. l10n</ListItem>
            </Appear>
            <Appear>
              <ListItem>Static or dynamic? How to translate?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>I18nWebpackPlugin</code> and others
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>console.log(__('Hello world'));</code>
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <CodePane
              lang="json"
              source={require("raw-loader!../examples/i18n.json")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/testing/">
              Testing
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>Integration with Mocha, Karma, and others</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Consider generating <b>coverage</b> reports
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Jest - Minimal setup, webpack specific features need care
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Mock</b> through{" "}
                <Link href="https://www.npmjs.com/package/sinon">Sinon</Link>,{" "}
                <Link href="https://www.npmjs.com/package/inject-loader">
                  inject-loader
                </Link>, and{" "}
                <Link href="https://www.npmjs.com/package/rewire-webpack">
                  rewire-webpack
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/deploying/">
              Deploying Applications
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>Handle with or without webpack</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/gh-pages">
                  gh-pages
                </Link>{" "}
                is handy for small projects that deploy to Git
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Plugins for deploying to S3 and other environments
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/techniques/consuming/">
              Consuming Packages
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Tweak module resolution through the <code>resolve</code>{" "}
                property
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Set <code>externals</code> to allow dependencies to be consumed
                from the browser environment through globals
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>It's possible to resolve/expose globals</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <code>webpack.IgnorePlugin</code> to disable modules
                (Moment.js languages)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <code>webpack.ContextReplacementPlugin</code> to choose
                specific modules
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/extending"
              textColor="white"
            >
              Extending
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/extending/loaders"
              textColor="white"
            >
              Extending with Loaders
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Loader Processing</Heading>
          <Image
            src={images.loaderProcessing}
            margin="40px auto"
            height="444px"
          />
          <List>
            <Appear>
              <ListItem>pitch/execute === capture/bubble</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Running Loaders</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/running-loaders.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Example Output</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/loader-output.txt")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Loader API</Heading>
          <List>
            <Appear>
              <ListItem>
                Examples: <code>this.async()</code>,{" "}
                <code>this.emitFile(url, content)</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Helpers in{" "}
                <Link href="https://www.npmjs.com/package/loader-utils">
                  loader-utils
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/schema-utils">
                  schema-utils
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Consider using{" "}
                <Link href="https://www.npmjs.com/package/webpack-defaults">
                  webpack-defaults
                </Link>{" "}
                as a starting point
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/extending/loaders">
              Extending with Loaders
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/loader-runner">
                  loader-runner
                </Link>{" "}
                is a starting point
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Run against webpack to match environment (differs a little)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>module.exports = input => input + input;</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Both sync and async loaders are possible</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Implement{" "}
                <Link href="https://survivejs.com/webpack/extending/loaders">
                  the book loader examples
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Implement a loader that parses YAML frontmatter
                and Markdown and converts those to a structure you can consume
                through JavaScript*
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/extending/plugins"
              textColor="white"
            >
              Extending with Plugins
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Plugin Example</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/plugin-1.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Writing Files with a Plugin</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/plugin-2.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/extending/plugins">
              Extending with Plugins
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Plugins provide access to <code>compiler</code> and{" "}
                <code>compilation</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Webpack itself is a collection of plugins (<Link href="https://www.npmjs.com/package/tapable">
                  tapable
                </Link>)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Development has to happen against webpack itself
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>compilation.warnings</code>,{" "}
                <code>compilation.errors</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Plugins can have plugins too: <code>HtmlWebpackPlugin</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Implement{" "}
                <Link href="https://survivejs.com/webpack/extending/plugins">
                  the book plugin examples
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Recap</Heading>
          <List>
            <Appear>
              <ListItem>Loaders are a good starting point</ListItem>
            </Appear>
            <Appear>
              <ListItem>Event model follows the DOM (capture/bubble)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Sync/async processing possible. Enough for basic
                transformations.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Plugins give greater access through <b>runtime hooks</b> (<code>
                  compiler
                </code>, <code>compilation</code>)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/webpack/">
            <Heading size={1}>SurviveJS - Webpack</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="324px" />
          <Heading size={2}>
            by <Link href="https://twitter.com/bebraw">Juho Vepsäläinen</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <Link href="https://survivejs.com/webpack/appendices/configuring-hmr">
              Configuring Hot Module Replacement
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                HMR allows patching of the application while it is running
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Run WDS in <b>hot</b> mode
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Provide hot updates through webpack using{" "}
                <code>HotModuleReplacementPlugin</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                The client has to hook into WDS scripts (WDS <code>inline</code>)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                The client has to implement the HMR interface through{" "}
                <code>module.hot.accept</code>
              </ListItem>
            </Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
