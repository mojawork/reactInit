import React, {Component} from 'react';
import {getService} from '../service/service'
import './Main.scoped.scss';

const apiURL = 'https://mojawork.de/proxy/service.php?name=behanceprojects';


class Main extends Component<any, any> {

    constructor(state: any) {
        super(state);
        this.state = {
            projects: []
        };
    }

    get projectData(): any {
        let projects = this.state.projects;
        if (projects.length > 0) {
            return projects.map((data: any, i: number) => {
                return (
                    <li key={i}>
                        {data.name}
                    </li>
                );
            });
        }
        return 'Loading....'
    }

    // --- lifecycle hooks ---
    componentDidMount() {
        getService(apiURL)
            .then((result) => {
                    this.setState({projects: result.projects})
                }
            )
    }
    // --- lifecycle hooks ---

    render() {
        return (
            <main>
                <h1>Main</h1>
                <hr/>
                <ul>
                    {this.projectData}
                </ul>
            </main>
        );
    }
}

export default Main;
