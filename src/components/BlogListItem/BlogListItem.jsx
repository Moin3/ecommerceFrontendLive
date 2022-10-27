import React from 'react'
import './blogListItem.css'
import { Link } from 'react-router-dom'

const BlogListItem = () => {
  return (

      <div className='bl-blog'>
          <h3 className="bl-blogTitle">Title One</h3>
          <p className="bl-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus optio praesentium iure sunt natus cum.</p>
            <div className="bl-lowerSection">
              <div className="bl-blogFooter">
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

export default BlogListItem