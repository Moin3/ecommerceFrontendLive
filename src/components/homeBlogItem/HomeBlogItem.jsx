import React from 'react'
import './homeblogitem.css'
import { Link } from 'react-router-dom'

const HomeBlogItem = () => {
  return (

      <div className='hb-blog'>
          <h3 className="hb-blogTitle">Title One</h3>
          <p className="hb-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus optio praesentium iure sunt natus cum.</p>
            <div className="lowerSection">
              <div className="hb-blogFooter">
                  <span>Admin</span>
                  <span>23.08.2022</span>
              </div>
              <Link className='read-more' to="/blog:46846848">
                Read more
              </Link>
            </div>
    </div>
 
  )
}

export default HomeBlogItem