export const CardDest = ({ img, city, country, rating, oldPrice, newPrice }) => {
  return (
    <div className="col card p-0">
      <img className="card-img-top" src={img} alt="card image" />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title fw-semibold">{city}</h5>
          <span className="d-inline-flex gap-1 text-muted font-small">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#eab308"
                d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
              ></path>
            </svg>
            {rating}</span
          >
        </div>
        <div className="d-flex justify-content-between">
          <p className="card-text text-muted font-small">
            <svg
              width="16"
              height="16"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#6b7280"
                d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z"
              ></path>
              <circle cx="16" cy="13" r="4" fill="none"></circle>
            </svg>
            {country}
          </p>
          <div>
            <span className="fw-semibold text-muted text-decoration-line-through"
            >&euro;{oldPrice}</span
            >
            <span
              className="px-2 py-1 rounded-1 fw-semibold ms-2 destination-final-price"
            >&euro;{newPrice}</span
            >
          </div>
        </div>
      </div>
    </div>
  )
}