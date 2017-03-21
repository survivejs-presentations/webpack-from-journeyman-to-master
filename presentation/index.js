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
            Optimizing
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Main Ideas
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Output
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Main Ideas
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Techniques
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Main Ideas
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Packages
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Main Ideas
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Extending
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Main Ideas
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="http://www.survivejs.com/">
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
