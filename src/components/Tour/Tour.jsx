import tour1 from '../../assets/image-4.png'
import { CardTour } from './CardTour'
import './Tour.css'

const cardData = Array(3).fill({
  img: tour1,
  city: "Rome, Italy",
  days: "7 Days Trip",
  rating: 4.8,
  priceTicket: 5.42,
})

export const Tour = () => {
  return (
    <section id="tour">
      <div className="row text-center w-50 mx-auto">
        <div className="col">
          <h2 className="fw-semibold mb-4">
            Best <span className="accent-text">vacation plan</span>
          </h2>
          <p className="text-muted tour-paragraph">
            Plan your perfect vacation with our travel agency. Choose among hundreds
            of all-inclusive offers!
          </p>
        </div>
      </div>
      <div className="row gap-4 justify-content-center">
        {
          cardData.map((card, index) => (
            <CardTour
              key={index}
              img={card.img}
              city={card.city}
              days={card.days}
              rating={card.rating}
              priceTicket={card.priceTicket}
            />
          ))
        }
        {/* <CardTour
      img={tour1}
      city="Rome, Italy"
      days="7 Days Trip"
      rating={4.8}
      priceTicket={5.42}
    />

    <CardTour
      img={tour2}
      city="London, UK"
      days="7 Days Trip"
      rating={4.7}
      priceTicket={2.42}
    />

    <CardTour
      img={tour3}
      city="Osaka, Japan"
      days="10 Days Trip"
      rating={4.8}
      priceTicket={5.42}
    /> */}
      </div>
    </section>
  )
}