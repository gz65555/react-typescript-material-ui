import * as React from "react";
import { AppBar } from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class App extends React.Component<{}, {}> {
    constructor(props:{}) {
        super(props);
    }
    componentDidMount() {
        // openPopup();
    }
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </MuiThemeProvider>
        );
    }
}