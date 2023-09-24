import { useState, useEffect } from 'react'
import { CardBlog } from './CardBlog'
import './Blog.css'

const URL = 'https://vulgus.serveo.net/post'

export const Blog = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setPosts(data.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <section id="blog">
      <div className="row text-center w-50 mx-auto">
        <div className="col">
          <h2 className="fw-semibold mb-4 pb-4">
            Get update with <span className="accent-text">latest blog</span>
          </h2>
        </div>
      </div>
      <div className="row gap-4 justify-content-center card-blogs">
        {
          posts.map(post => (
            <CardBlog
              key={post.id}
              title={post.comentario}
              date={post.Site.createdAt}
              img={post.Site.urlImage}
            />
          ))
        }
      </div>
    </section>
  )
}