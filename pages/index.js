import React from 'react'
import Link from 'next/link'
import _ from 'lodash'
const movies = require("../imdb_result.json")

export default class Index extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const reviewed_moviews = movies.filter(m => m.imdbRating !== 'N/A')
    const sorted_movies = _.sortBy(reviewed_moviews, ['imdbRating','imdbVotes']).reverse();
    return { data: sorted_movies}
  }

  render () {
    return (
      <React.Fragment>
        <style jsx>{`
          div.container {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
          }
          @media (min-width: 600px) {
            div.container {
              flex-direction: row;
            }
            div.poster {
              margin-right: 10px;
            }
          }
        `}</style>
        <h1>MIFF - IMDB Ratings</h1>
        {this.props.data.map((d,i) =>
          <div className="container" key={i}>
            <div className="poster" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <img src={d.Poster} style={{ display:'block', width: '100%', height: 'auto'}} />
            </div>
            <div style={{ flex: 3}}>
              <h1>{d.Title}</h1>
              <p style={{fontSize: 18, fontWeight: 500}}>{d.imdbRating} out of {d.imdbVotes} votes</p>
              <div>
                <span>{d.Director}</span> / <span>{d.Released}</span>
              </div>
              <p>
                <span>IMDB link: </span>
                <a href={`https://www.imdb.com/title/${d.imdbID}`}>{d.imdbID}</a>
              </p>
              <p>{d.Plot}</p>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}