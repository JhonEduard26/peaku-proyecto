import imgTourist from '../../assets/tourist-with-thumb-up.png'
import './Home.css'

export const Home = () => {
  return (
    <section id="home">
      <div className="row align-items-center">
        <div className="col">
          <h1>
            Get started your exciting <span className="accent-text">journey</span> with us.
          </h1>
          <p className="text-muted home-parragraph">
            A team of experienced tourism professionals will provide you with the
            best advice and tips for your desire place.
          </p>
          <button className="d-inline-flex py-2 px-4 rounded-2 fw-semibold btn-discover">
            Discover Now
          </button>
        </div>
        <div className="col position-relative">
          <picture className="home-img--bg">
            <img width="320" height="auto" src={imgTourist} alt="Tourist's image" />
          </picture>

          <div
            className="position-absolute d-flex align-items-center gap-2 px-2 py-2 rounded-2 home-badge badge-star"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#eab308"
                d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
              ></path>
            </svg>
            <div>
              <h6 className="fw-semibold">27K</h6>
              <p className="text-muted m-0">Customer reviewed</p>
            </div>
          </div>

          <div
            className="position-absolute d-flex align-items-center gap-2 px-2 py-2 rounded-2 home-badge badge-maps"
          >
            <svg
              width="24"
              height="28"
              viewBox="0 0 256 367"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#34A853"
                d="M70.585 271.865a370.712 370.712 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432l-9.344 54.337Z"
              ></path>
              <path
                fill="#FBBC04"
                d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28l-13.225 75.08Z"
              ></path>
              <path
                fill="#4285F4"
                d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57l76.343-33.68Z"
              ></path>
              <path
                fill="#1A73E8"
                d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205l-6.19-50.75Z"
              ></path>
              <path
                fill="#EA4335"
                d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759l-77.721 92.368Z"
              ></path>
            </svg>
            <div>
              <h6 className="fw-semibold">Explore</h6>
              <p className="text-muted m-0">Every cornar of the world with us</p>
            </div>
          </div>
          <div
            className="position-absolute d-flex align-items-center gap-2 px-2 py-2 rounded-2 home-badge badge-award"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ea580c"
                d="M4.46 5.16L5 7.46l-.54 2.29l2.01 1.24L7.7 13l2.3-.54l2.3.54l1.23-2.01l2.01-1.24L15 7.46l.54-2.3l-2-1.24l-1.24-2.01l-2.3.55l-2.29-.54l-1.25 2zm5.55 6.34a3.999 3.999 0 1 1 0-8c2.2 0 3.99 1.79 3.99 3.99c0 2.22-1.79 4.01-3.99 4.01zm-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3zm3.84 1.1l-1.28 2.24l-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25l2.13-.51L7 19.2L5.6 17H3.1z"
              ></path>
            </svg>
            <div>
              <h6 className="fw-semibold">Best Tour Awards</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-auto home-info">
        <div className="col">
          <p className="fw-semibold">
            Location
            <svg
              width="12"
              height="12"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fa7436"
                d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
              ></path>
            </svg>
          </p>
          <p className="text-muted">Where are you going</p>
        </div>
        <div className="col">
          <p className="fw-semibold">
            Date
            <svg
              width="12"
              height="12"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fa7436"
                d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
              ></path>
            </svg>
          </p>
          <p className="text-muted">When you will go</p>
        </div>
        <div className="col">
          <p className="fw-semibold">
            Guest
            <svg
              width="12"
              height="12"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fa7436"
                d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
              ></path>
            </svg>
          </p>
          <p className="text-muted">Number of guest</p>
        </div>
        <div className="col align-self-center">
          <button className="d-inline-flex py-2 px-4 rounded-2 btn-sign"
          >Explore now</button
          >
        </div>
      </div>
    </section>
  )
}
