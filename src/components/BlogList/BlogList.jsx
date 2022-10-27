import React from 'react'
import './blogList.css'
import BlogListItem from '../BlogListItem/BlogListItem'

const BlogList = () => {
  return (
    <div id='blog' className='bl-container'>
        <h2 className="bl-title">Our Blog</h2>
        <div className="bl-blogs">
            <BlogListItem />
            <BlogListItem />
            <BlogListItem />
            <BlogListItem />
            <BlogListItem />
            <BlogListItem />
        </div>
</div>
  )
}

export default BlogList