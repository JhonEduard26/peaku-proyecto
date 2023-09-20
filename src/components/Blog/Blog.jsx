import { CardBlog } from './CardBlog'
import tour1 from '../../assets/image-4.png'
import './Blog.css'

const blogData = Array(4).fill({
  title: "The Amazing Difference a Year of Travelling.",
  date: "July 27, 2021",
  img: tour1
})

export const Blog = () => {
  return (
    <section id="blog">
      <div className="row text-center w-50 mx-auto">
        <div className="col">
          <h2 className="fw-semibold mb-4 pb-4">
            Get update with <span className="accent-text">latest blog</span>
          </h2>
        </div>
      </div>
      <div className="row gap-4 justify-content-center">
        {
          blogData.map((item, index) => (
            <CardBlog
              key={index}
              title={item.title}
              date={item.date}
              img={item.img}
            />

          ))
        }
        {/* <CardBlog
          title="The Amazing Difference a Year of Travelling."
          date="July 27, 2021"
          img={tour1}
        />
        <CardBlog
          title="Travel far enough, you meet yourself."
          date="July 27, 2021"
          img={tour2}
        />
        <CardBlog
          title="How to Save Money While Visiting Africa."
          date="July 27, 2021"
          img={tour3}
        />
        <CardBlog
          title="Reflections on 5 Months of Travel: Time to Hang."
          date="July 27, 2021"
          img={tour1}
        /> */}
      </div>
    </section>
  )
}