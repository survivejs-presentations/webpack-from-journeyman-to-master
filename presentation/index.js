// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  //BlockQuote,
  //Cite,
  //CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  //Layout,
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
            <Link href="https://survivejs.com/webpack/optimizing">Optimizing</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/optimizing/minifying">Minifying</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/optimizing/tree-shaking">Tree Shaking</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/optimizing/setting-environment-variables">Setting Environment Variables</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames">Adding Hashes to Filenames</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/optimizing/separating-a-manifest">Separating a Manifest</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/optimizing/analyzing-build-statistics">Analyzing Build Statistics</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/optimizing/performance">Performance</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/output">Output</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/output/targets">Build Targets</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/library-output">Library Output</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/output/multiple-pages">Multiple Pages</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/output/server-side-rendering">Server Side Rendering</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/techniques">Techniques</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/techniques/dynamic-loading">Dynamic Loading</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/techniques/web-workers">Web Workers</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/techniques/i18n">Internationalization</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/techniques/testing">Testing</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/techniques/deploying">Deploying Applications</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/packages">Packages</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/packages/consuming">Consuming Packages</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/packages/authoring">Authoring Packages</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/extending">Extending</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://survivejs.com/webpack/extending/loaders">Extending with Loaders</Link>
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
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
