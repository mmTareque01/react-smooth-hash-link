import React, { Component } from 'react'
import { useNavigation } from './useNavigation'

class HashLinks extends Component {
    scrollingEffect() {
        if (window.location.hash) {
            let element = document.getElementById((window.location.hash).replace('#', ''));
            if (element) element.scrollIntoView({ block: 'start', behavior: this.props.stopSmooth ? 'auto' : 'smooth' });
        }
    }
    hashNavigation(path) {
        this.props.navigateTo(path)
        this.scrollingEffect()
    }
    componentDidMount() {
        this.scrollingEffect()
    }
    componentDidUpdate() {
        this.scrollingEffect()
    }

    render() {
        return (
            <div
                onClick={() => { this.hashNavigation(this.props.to) }}
                style={{ cursor: 'pointer' }}
                className={this.props.className}
            >
                {this.props.menu}
            </div>
        )
    }
}

export function HashLink({to, menu, stopSmooth=false, className}) {
    let navigateObj = useNavigation();
    return (<HashLinks
        to={to}
        menu={menu}
        stopSmooth={stopSmooth}
        className={className}
        navigateTo={navigateObj}
    />)
}