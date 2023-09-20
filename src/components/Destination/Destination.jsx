import { CardDest } from './CardDest'
import './Destination.css'
import madridImg from '../../assets/image-1.png'

const cardData = Array(4).fill({
  img: madridImg,
  city: "Madrid",
  country: "Spain",
  rating: 4.8,
  oldPrice: 950,
  newPrice: 850,
})

export const Destination = () => {
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
      <div className="row gap-4 justify-content-center">
        {
          cardData.map((card, index) => (
            <CardDest
              key={index}
              img={card.img}
              city={card.city}
              country={card.country}
              rating={card.rating}
              oldPrice={card.oldPrice}
              newPrice={card.newPrice}
            />
          ))
        }
        {/* <CardDest
      img={madridImg}
      city="Madrid"
      country="Spain"
      rating={4.8}
      oldPrice={950}
      newPrice={850}
    />
    <CardDest
      img={londonImg}
      city="London"
      country="UK"
      rating={4.5}
      oldPrice={850}
      newPrice={750}
    />

    <CardDest
      img={parisImg}
      city="Paris"
      country="France"
      rating={4.4}
      oldPrice={699}
      newPrice={599}
    />

    <CardDest
      img={londonImg}
      city="London"
      country="UK"
      rating={4.8}
      oldPrice={950}
      newPrice={850}
    /> */}
      </div>
    </section>
  )
}