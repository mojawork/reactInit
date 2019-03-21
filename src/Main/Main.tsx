import React, {Component} from 'react';
import {getService} from '../service/service'
import MainTeaser from './Teaser/Teaser'
import './Main.scoped.scss';


// --- types ---
import {iTeaserItem} from './Teaser/iTeaser'
// --- types ---

// --- const ---
const apiURL = 'https://mojawork.de/proxy/service.php?name=behanceprojects';
// --- const ---

class Main extends Component<any, any> {

    constructor(state: any) {
        super(state);
        this.state = {
            headline: 'Main',
            behanceData: []
        };
    }

    private handleChange = (event:any) => {
            const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };


    private ClickMe = (massage: string) => (event: any) => {
        alert(massage);
    };


    get behanceTeaser(): any {
        let projects = this.state.behanceData;
        if (projects.length > 0) {

            return projects.map((data: any, count: number) => {
                const publishedOnOptions = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};
                let probData:iTeaserItem = {
                    name : data.name,
                    target : false,
                    imageSrc: data.covers[Object.keys(data.covers)[Object.keys(data.covers).length - 1]],
                    published: 'Created: ' + new Date(data.published_on * 1000).toLocaleDateString("de-DE", publishedOnOptions),
                    url : data.url
                };
                return (
                    <MainTeaser data={probData} key={'behalnce-teaser-'+count} />
                );
            });
        }
        return 'Loading....'
    }

    // --- lifecycle hooks ---
    componentDidMount() {
        getService(apiURL)
            .then((result) => {
                    this.setState({behanceData: result.projects})
                }
            )
    }
    // --- lifecycle hooks ---

    render() {
        return (
            <main>
                <h1>{this.state.headline}</h1>
                <hr/>

                <form>
                    <label>Change headline:</label>
                    <input
                        type="text"
                        name="headline"
                        placeholder='input'
                        onChange={this.handleChange} />
                    <button onClick={this.ClickMe('reset')}>reset</button>
                </form>

                <hr/>

                <section className="gid">
                    {this.behanceTeaser}
                </section>
            </main>
        );
    }
}

export default Main;
