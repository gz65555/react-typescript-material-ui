import * as React from "react";
import * as $ from 'jquery';
// import 'bootstrap';
import Popup from './Popup';
import { AppBar } from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    constructor(props: HelloProps) {
        super(props);
    }
    componentDidMount() {
        // openPopup();
    }
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="Titl"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </MuiThemeProvider>
        );
    }
}