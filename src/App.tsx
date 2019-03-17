import React, {Component} from 'react';
import logo from 'logo.svg';
import 'App.scoped.scss';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
    render() {
        const dataHeader =
            {
                Links: [
                    {
                        'name': 'Link01',
                        'target' : false,
                        'url': '#',
                    },
                    {
                        'name': 'Link02',
                        'target' : true,
                        'url': '#',
                    },
                    {
                        'name': 'Link02',
                        'target' : false,
                        'url': '#',
                    }
                ]
            };

        return (
            <div className="App">
                <Header links={dataHeader.Links}/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
