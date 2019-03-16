import React, {Component} from 'react';
import {iHeaderData, iHeaderLink} from './iHeader'
import './Header.scoped.scss';

class Header extends Component<iHeaderData> {

    /*
    constructor(props: iHeaderData) {
        super(props);
    }
    */

    get listLinks() {
        return this.props.links.map((link: iHeaderLink, i: number) => {
            return (
                <li key={i}>
                    <a target={link.target ? 'mojawork' : ''} href={link.url}>{link.name}</a>
                </li>
            );
        });
    }

    render() {
        return (
            <header>
                <h1>Header</h1>
                <hr/>
                <nav>
                    <ul>
                        {this.listLinks}
                    </ul>
                </nav>
            </header>
        );
    }
}


export default Header;
