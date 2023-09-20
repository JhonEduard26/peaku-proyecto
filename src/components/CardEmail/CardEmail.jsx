import './CardEmail.css'

export const CardEmail = () => {
  return (
    <div className="position-absolute rounded" id="card-email">
      <h2 className="fw-semibold mb-4 pb-4">Subscribe and get exclusive deals &amp; offer</h2>

      <div className="d-flex justify-content-between align-items-center w-50 mx-auto p-3 bg-white rounded">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#6b7280"
              fillRule="evenodd"
              d="M18.333 2.5c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H1.667C.747 17.5 0 16.754 0 15.833V4.167C0 3.247.746 2.5 1.667 2.5h16.666ZM7.168 11.328l-4.91 4.852h15.325l-4.857-4.802L10 13.265l-2.832-1.937ZM18.64 7.292l-4.796 3.316l4.796 4.736V7.292Zm-17.279.061v7.836l4.686-4.631l-4.686-3.205Zm16.956-3.532H1.698a.358.358 0 0 0-.25.086a.26.26 0 0 0-.085.222v1.62L10 11.656l8.644-5.965V4.199c.001-.134-.03-.231-.092-.292a.306.306 0 0 0-.234-.086Z"
            ></path>
          </svg>
          <input className="p-1 border-0" type="email" name="email" id="email" placeholder="Enter your email" />
        </div>
        <button className="d-inline-flex py-2 px-4 rounded-2 btn-sign">Subscribe</button>
      </div>
    </div>
  )
}