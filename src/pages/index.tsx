import { HomeContainer, Product } from "@/styles/pages/home";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <footer>
          <strong>T-shirt X</strong>
            <span>$ 79.90</span>
        </footer>
      </Product>

      <Product>
        <footer>
        <strong>T-shirt X</strong>
          <span>$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}