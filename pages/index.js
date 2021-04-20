import Link from "next/link"

import * as HREF from "../shared/constants/href"

import StyledContainer, { Links } from "./home/styles"

const HomePage = () => (
  <StyledContainer>
    <h1>Corte em Casa</h1>
    <main>
      <div>
        <p>
          Escolha qual o serviço a ser realizado com um cabeleireiro disponivel
          proximo a você.
        </p>
        <Link href={HREF.LISTAR_CORTES}>
          <button>Escolher corte</button>
        </Link>
      </div>
      <div>
        <p>
          Escolha um cabeleireiro especifico de nossa lista e agende um horário
        </p>
        <Link href={HREF.LISTAR_CABELEIREIROS}>
          <button>Listar cabeleireiros próximos</button>
        </Link>
      </div>
      <div>
        <p>
          Ja sabe com quem quer cortar? Procure seu o cabeleireiro desejado pelo
          nome
        </p>
        <Link href={HREF.BUSCAR_CABELEIREIRO}>
          <button>Buscar cabeleireiro</button>
        </Link>
      </div>
    </main>
    <Links>
      <span>Log in</span> | <span>Cadastrar</span>
    </Links>
  </StyledContainer>
)

export default HomePage
