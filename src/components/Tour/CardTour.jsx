export const CardTour = ({ img, city, days, rating, priceTicket }) => {
  return (
    <div className="col card p-0">
      <img className="card-img-top" src={img} alt="card image" />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title fw-semibold">{city}</h5>
          <span className="fw-semibold accent-text">${priceTicket}K</span>
        </div>
        <div className="d-flex justify-content-between">
          <p className="card-text text-muted font-small">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#ef4444"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 19L19 6m0 0v12.48M19 6H6.52"></path>
            </svg>
            {days}
          </p>
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
            <span>
              {rating}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}