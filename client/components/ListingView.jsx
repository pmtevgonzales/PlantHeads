import React from 'react'
import { getListings } from '../apis/listings'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class ListingView extends React.Component {
    state = {
        listings: [],
    }

    componentDidMount() {
        getListings()
        .then(listings => {
            this.setState({
                listings: listings
            })
        })
    }

    render() {
        const listings = this.state.listings
        return (
            <>
            <div  className='page-boarder'>
            <div className='mainListingViewContainer'>
                <div className='listingViewHeader'>
                    <h2>Adopt A New Best Friend <img className='hiddenOddish' src="/images/oddishtrans.png" /></h2>
                </div>
                <div className='listingViewContainer'>
                {listings.map(listing => 
                    <Link to={`/listings/${listing.id}`}><div className='singleListingView'>
                        <img className='listingPic' src={listing.photoFile} alt="photo of tree"/>
                        <p className='listingInfo'>Botanical Name: {listing.scientific_name}</p>
                        <p className='listingInfo'>Common Name: {listing.common_name}</p>
                        <p className='listingInfo'>Price: ${listing.cost}</p>  
                    </div></Link>)}
                </div>
                
                <div className='linkToCreateListing'>
                    {this.props.auth.isAuthenticated ? (
                    <>
                    <h2 className='createListingHeader'>To Give A Plant To Another Loving Family</h2>
                    <Link to='/createListing'><button id='save'>Create Listing</button></Link>
                    </>
                    ) : 'Log in to create a listing'}
                </div>
            </div>
            </div>
            
          </>  
        )
    }   
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }

export default connect(mapStateToProps)(ListingView)