import React, {Component} from 'react';
import {iTeaserData} from './iTeaser'
import './Teaser.scoped.scss';

class MainTeaser extends Component<iTeaserData> {

    constructor(props: iTeaserData) {
        super(props);
    }

    private openLink = (url: string) => (event: any) => {
        window.open( url, 'mojawork' )
    };

    render() {
        return (
            <figure onClick={this.openLink(this.props.data.url)}>
                <figcaption>{this.props.data.name}</figcaption>
                <aside>{this.props.data.published}</aside>
                <img src={this.props.data.imageSrc} />
            </figure>
        );
    }
}

export default MainTeaser;
