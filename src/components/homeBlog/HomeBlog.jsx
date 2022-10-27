
import React from 'react'
import "./homeblog.css"
import { Link } from 'react-router-dom' 
import HomeBlogItem from '../homeBlogItem/HomeBlogItem'

const HomeBlog = () => {
  return (
    <div id='blog' className='hb-container'>
        <div className="row1">
            <div className="blogTitle">
                GadgetHunter Storis
            </div>
            <div className="blogSubtitle">
                You Can Daily Updates and Special offer news here
            </div>
        </div>
        <div className="row2">
            <div className="blogSec">
                <HomeBlogItem/>

            </div>
            <div className="blogSec">
                <div className="blogSubsec">
                    <div className="blogSubSecchild"><HomeBlogItem/></div>
                    <div className="blogSubSecchild"><HomeBlogItem/></div>
                </div>
                <div className="blogSubsec">
                    <div className="blogSubSecchild"><HomeBlogItem/></div>
                    <div className="blogSubSecchild"><HomeBlogItem/></div>
                </div>
            </div>
        </div>
        <div className="view-more">
                <Link to='/blog' className='hb-more'>View More</Link>
        </div>
    </div>
  )
}

export default HomeBlog

