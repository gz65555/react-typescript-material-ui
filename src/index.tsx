import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);