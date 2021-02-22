import '../App.css';
import { Component } from 'react';

class Tabledata extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Details</th>
                    <th>Year</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                    <td><a className="project_title" href="https://viztracer.readthedocs.io/en/latest/">viztracer</a></td>
                    <td>VizTracer is a low-overhead logging/debugging/profiling tool that can trace and visualize your python code to help you intuitively understand your code and figure out the time consuming part of your code.</td>
                    <td>2020</td>
                    </tr>
                    <tr>
                    <td><a className="project_title" href="https://github.com/gaogaotiantian/vizplugins">vizplugins</a></td>
                    <td>The official plugins for VizTracer; currently support tracing cpu and memory usage through psutil.</td>
                    <td>2020</td>
                    </tr>
                </thead>
            </table>
        )
    }
}

export default Tabledata