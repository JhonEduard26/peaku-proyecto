export const CardBlog = ({ title = '', date = '', img }) => {
  const formatteddDate = new Date(date).toLocaleDateString('en-US', {
    month: "long",
    day: "numeric",
    year: "numeric"
  })

  return (
    <div className="card p-0">
      <img className="card-img-top" src={img} alt="card image" />
      <div className="card-body">
        <h5 className="card-title fw-semibold font-small">{title}</h5>
        <p className="card-text text-muted font-small">{formatteddDate}</p>
      </div>
    </div>
  )
}