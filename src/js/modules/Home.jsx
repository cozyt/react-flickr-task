require('../../sass/modules/home.scss');

import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            posts: this.props.apiResponse.items
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-header">
                            <h1>Posts feed</h1>
                            <p>Posts are loaded from the Flickr API randomly, refresh the page to update the image feed.</p>
                        </div>
                    </div>
                </div>
                <div className="row  post-list">
                    {this.state.posts.map((post, i) => 
                        <div key={i} className="col-xs-6 col-sm-4 col-md-3  post-list__item">
                            <Link to={'/post/' + i}> 
                                <div className="thumbnail  post-list__thumbnail">
                                    <img
                                     src={post.media.m}
                                     className="img-responsive  post-list__img" 
                                    />
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )
  }
}

export default Home
