/* @refresh reload */
import { render } from "solid-js/web";

import "./styles.css";
import "./fonts/BeaufortforLOL-Regular.ttf";
import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);
