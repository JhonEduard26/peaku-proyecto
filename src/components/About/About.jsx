import group1 from '../../assets/group-1.png'
import group2 from '../../assets/group-2.png'
import group3 from '../../assets/group-3.png'
import './About.css'
import { CardAbout } from './CardAbout'

export const About = () => {
  return (
    <section id="about">
      <div className="row text-center w-50 mx-auto">
        <div className="col">
          <h2 className="fw-semibold mb-4">Things you need <span className="accent-text">to do</span></h2>
          <p className="text-muted about-paragraph">
            We ensure that you&apos;ll embark on a perfectly planned, safe vacation
            at a price you can afford.
          </p>
        </div>
      </div>
      <div className="row gap-4 justify-content-center">
        <CardAbout
          imgSrc={group3}
          title="Sign up"
          description="Complete all the work associated with planning and processing"
        />
        <CardAbout
          imgSrc={group1}
          title="Worth of Money"
          description="After succesfully access then book from exclusive deals &amp; pricing"
        />
        <CardAbout
          imgSrc={group2}
          title="Exciting travel"
          description="Start and explore a wide range of exciting travel experience"
        />
      </div>
    </section>
  )
}