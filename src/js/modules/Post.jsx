require('../../sass/modules/post.scss');

import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'

class Post extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            post: this.props.apiResponse.items[this.props.params.postKey]
        }
    }

    render() {
        var dateTaken  = moment(this.state.post.date_taken).format('dddd, MMMM Do YYYY, kk:mm:ss'),
            datePosted = moment(this.state.post.published).fromNow(),
            authorName = this.state.post.author.split(' ')[1],
            tags       = ''

        authorName = authorName.substr(2)
        authorName = authorName.substr(0, authorName.length-2)

        if(this.state.post.tags) {
            tags = (<p className="text-muted  post__tags">{'#' + this.state.post.tags.split(' ').join(' #')}</p>)
        }

        return (
            <div className="container">                        
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                        <h1>{this.state.post.title}</h1><br />

                        <div className="thumbnail  post__thumbnail">
                            <img
                             src={this.state.post.media.m}
                             className="img-responsive  post__img" 
                            />

                            <div className="caption  post__caption">
                                <h2 style={{marginTop: 0}}>
                                    <small> by <a href={'http://www.flickr.com/people/' + this.state.post.author_id}>{authorName}</a></small>
                                </h2>

                                <p><small className="text-muted">Posted {datePosted}</small></p>
                                {tags}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 text-right">
                        <p><Link to="/"><i className="glyphicon glyphicon-chevron-left"></i> Return to posts feed</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
