import tourist from '../../assets/tourist-with-thumb-up.png'
import './Testimony.css'

export const Testimony = () => {
  return (
    <section id="testimony">
      <div className="row">
        <div className="col">
          <h2 className="fw-semibold">
            What people say <span className="accent-text">about us</span>
          </h2>
          <p className="text-muted mb-4">
            Our clients send us bunch of smilies with our services and we love them.
          </p>
          <div className="d-flex gap-2">
            <button
              className="btn rounded-circle d-inline-flex justify-content-center align-items-center"
              style={{ width: "32px", height: "32px", border: "1px solid gray", color: "gray" }}>&larr;
            </button>
            <button
              className="btn rounded-circle d-inline-flex justify-content-center align-items-center"
              style={{ width: "32px", height: "32px", backgroundColor: "var(--main)", color: "white" }}>&rarr;
              </button>
          </div>
        </div>
        <div className="col position-relative">
          <div className="card card-main">
            <img
              className="position-absolute p-2 rounded-circle avatar-img"
              src={tourist}
              alt="avatar"
            />
            <div className="card-body">
              <p className="card-text text-muted mb-4">
                &quot;On the window talking painted pasture yet its express parties use.
                Sure last upon he same as knew next. Of believed or diverted no.&quot;
              </p>

              <div>
                <h5 className="card-title fw-semibold m-0">Mike Taylor</h5>
                <p className="card-text text-muted">Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="card position-absolute card-behind">
            <div className="card-body">
              <p className="card-text text-muted mb-4">
                &quot;On the window talking painted pasture yet its express parties use.
                Sure last upon he same as knew next. Of believed or diverted no.&quot;
              </p>

              <div>
                <h5 className="card-title fw-semibold m-0">Chris Thomas</h5>
                <p className="card-text text-muted">CEO of Red Button</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}