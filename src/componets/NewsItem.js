// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class
    NewsItem extends Component {
    //   static propTypes = {second: third}
    render() {
        let {title, desc, imgUrl, newsUrl} = this.props;
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={imgUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
                    </div>
            </div>
        )
    }
}
