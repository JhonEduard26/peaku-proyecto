import group1 from '../../assets/group-1.png'
import group2 from '../../assets/group-2.png'
import group3 from '../../assets/group-3.png'
import './About.css'

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
        <div className="card" style={{width: "18rem"}}>
          <img width="36" height="36" src={group3} alt="card image" style={{margin: "16px 0 0 16px"}} />
          <div className="card-body">
            <h5 className="card-title fw-semibold">Sign up</h5>
            <p className="card-text text-muted">Complete all the work associated with planning and processing</p>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img width="36" height="36" src={group1} alt="card image" style={{margin: "16px 0 0 16px"}} />
          <div className="card-body">
            <h5 className="card-title fw-semibold">Worth of Money</h5>
            <p className="card-text text-muted">After succesfully access then book from exclusive deals &amp; pricing</p>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img width="36" height="36" src={group2} alt="card image" style={{margin: "16px 0 0 16px"}} />
          <div className="card-body">
            <h5 className="card-title fw-semibold">Exciting travel</h5>
            <p className="card-text text-muted">Start and explore a wide range of exciting travel experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}