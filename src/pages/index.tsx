import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <footer>
          <strong>T-shirt X</strong>
          <span>$ 79.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <footer>
          <strong>T-shirt X</strong>
          <span>$ 79.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <footer>
          <strong>T-shirt X</strong>
        <span>$ 79.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <footer>
          <strong>T-shirt X</strong>
        <span>$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}