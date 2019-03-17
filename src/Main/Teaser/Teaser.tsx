import React, {Component} from 'react';
import {iTeaserData} from './iTeaser'
import './Teaser.scoped.scss';

class MainTeaser extends Component<iTeaserData> {

    constructor(props: iTeaserData) {
        super(props);
    }

    render() {
        return (
            <figure>
                <figcaption>{this.props.data.name}</figcaption>
                <aside>{this.props.data.published}</aside>
                <img src={this.props.data.url} />
            </figure>
        );
    }
}

export default MainTeaser;
