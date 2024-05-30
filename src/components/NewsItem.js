import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let{title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://th.bing.com/th?id=OIP.nyW8wpMJV5Y8HK7r1D67jgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

// c72bdc5c2b014cf68e1a8f2d51fd2f9e api key
