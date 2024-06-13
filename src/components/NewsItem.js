import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {title, description, imageUrl, newUrl, author, date, source} = this.props;
    return (
      <div className='my-2'>
        <div className="card my-4" >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'

          }}>

        <span className=" badge rounded-pill bg-danger"> {source}

        </span>
          </div>
            <img src={!imageUrl?"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg":imageUrl} 
            className="card-img-top" alt="..."/>

            <div className="card-body">
                <h5 className="card-title" >{title} </h5>
                
                <p className="card-text" >{description} ....</p>
                <p className='card-inf0' style={{fontStyle: "italic",  fontWeight: 'bold'}}> By {!author? "Unknown" : author}</p>
                <p className='card-inf02' style={{fontStyle: "italic",  fontWeight: 'bold'}}> Last Updated {new Date(date).toGMTString()}</p>
                <a href={newUrl}  className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
        
      </div>
    )
  }
}



