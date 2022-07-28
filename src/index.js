import { createBrowserHistory } from 'history';
import React, { Component } from 'react'

export class HashLink extends Component {
    customHistory = createBrowserHistory()

    navigateTo(path) {
        this.customHistory.push(path)
        if (window.location.hash) {
            let element = document.getElementById((window.location.hash).replace('#', ''));
            if (element) element.scrollIntoView({ block: 'start', behavior: this.props.stopSmooth ? 'auto' : 'smooth' });
        }
    }

    componentDidMount() {
        if (window.location.hash) {
            let element = document.getElementById((window.location.hash).replace('#', ''));
            if (element) element.scrollIntoView({ block: 'start', behavior: this.props.stopSmooth ? 'auto' : 'smooth' });
        }

    }

    render() {
        return (
            <div
                onClick={() => { this.navigateTo(this.props.to) }}
                style={{cursor:'pointer'}}
                className={this.props.class}
            >
                {this.props.menu}
            </div>
        )
    }
}
