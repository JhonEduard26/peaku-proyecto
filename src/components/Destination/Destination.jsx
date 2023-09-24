import { CardDest } from './CardDest'
import { useState, useEffect } from 'react'
import './Destination.css'

const URL = 'https://vulgus.serveo.net/site'

export const Destination = () => {

  const [sites, setSites] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setSites(data.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <section id="destination">
      <div className="row text-center w-50 mx-auto">
        <div className="col">
          <h2 className="fw-semibold mb-4">
            Exclusive <span className="accent-text">deals &amp; discounts</span>
          </h2>
          <p className="text-muted destination-paragraph">
            Discover our fantastic early booking discounts &amp; start planning your
            journey
          </p>
        </div>
      </div>
      <div className="card-sites">
        {sites.map((site) => (
          <CardDest
            key={site.id}
            city={site.ciudad}
            country={site.pais}
            rating={site.valoracion}
            img={site.urlImage}
            newPrice={site.precio}
            oldPrice={Number(site.precio) + 100}
          />
        ))}
      </div>
    </section>
  )
}