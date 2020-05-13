import React from 'react'

import {Link} from 'react-router-dom'

function Results(props) {
  return (
    <div id='resultSection'>
        <h3>Search Results <img className='hiddenOddish' src="/images/oddishtrans.png" /></h3>
        <div id='results'>
            {props.results.map(result => <Link key={result.id} to={`/plant/${result.id}`}><h2  className='result'>{result.scientific_name} {result.common_name ? `(${result.common_name})`: ''}</h2></Link>)}
        </div>
    </div>
  )
}

export default Results