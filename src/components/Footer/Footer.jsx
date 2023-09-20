import logo from '../../assets/logo.png'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="mx-auto" style={{width: "920px"}}>
        <div className="row">
          <div className="col">
            <picture>
              <img className="my-4" src={logo} alt="trabook logo" />
            </picture>
            <p className="w-50 text-muted fw-semibold">
              Book your trip in minute, get full control for much longer
            </p>
            <div className="d-flex flex-row gap-4">
              <svg
                className="p-2 bg-white rounded-circle icon"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                ></path>
              </svg>
              <svg
                className="p-2 rounded-circle icon"
                style={{ backgroundColor: "#fa7436" }}
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                ></path>
              </svg>
              <svg
                className="p-2 bg-white rounded-circle icon"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <ul className="d-flex flex-column gap-2">
                  <li className="list-group-item item-head mt-4">Company</li>
                  <li className="list-group-item text-muted">About</li>
                  <li className="list-group-item text-muted">Carrers</li>
                  <li className="list-group-item text-muted">Logistic</li>
                  <li className="list-group-item text-muted">More</li>
                  <li className="list-group-item text-muted">Privacy &amp; Policy</li>
                </ul>
              </div>
              <div className="col">
                <ul className="d-flex flex-column gap-2">
                  <li className="list-group-item item-head mt-4">Contact</li>
                  <li className="list-group-item text-muted">Help/FAQ</li>
                  <li className="list-group-item text-muted">Press</li>
                  <li className="list-group-item text-muted">Affiliates</li>
                </ul>
              </div>
              <div className="col">
                <ul className="d-flex flex-column gap-2">
                  <li className="list-group-item item-head mt-4">More</li>
                  <li className="list-group-item text-muted">Press Centre</li>
                  <li className="list-group-item text-muted">Our Blog</li>
                  <li className="list-group-item text-muted">Low fare tips</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p className="text-muted">Copyright, Trabook 2022. All rights reserved.</p>
          <p className="text-muted">Terms &amp; Conditions</p>
        </div>
      </div>
    </footer>
  )
}