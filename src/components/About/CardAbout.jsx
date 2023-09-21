export const CardAbout = ({ imgSrc, title, description }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img width="36" height="36" src={imgSrc} alt="card image" style={{ margin: "16px 0 0 16px" }} />
      <div className="card-body">
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className="card-text text-muted">
          {description}
        </p>
      </div>
    </div>
  )
}