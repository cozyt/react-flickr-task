import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="navbar navbar-static-top navbar-inverse">
                        <div className="container">
                            <div className="navbar-header">
                                <Link to="/" className="navbar-brand">
                                    Flickr REACT
                                </Link>
                            </div>
                            <div className="navbar-text navbar-right">{this.props.route.apiResponse.title}</div>
                        </div>
                    </div>
                </header>
                <main>
                    {React.cloneElement(this.props.children, { apiResponse: this.props.route.apiResponse })}
                </main>
                <footer>
                    <hr />
                    <div className="col-sm-12">
                        <p>
                            <small>
                                A REACT and Flickr API task for Mobile5<br />
                                <span className="text-muted">
                                    Data loaded from <a href="https://www.flickr.com">Flickr</a> using the <a href="https://www.flickr.com/services/api/">official Flickr API</a> resource <a href={this.props.route.apiResource}>{this.props.route.apiResource}</a>
                                </span>
                            </small>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default App
