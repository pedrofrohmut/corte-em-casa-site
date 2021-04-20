import Link from "next/link"

import * as HREF from "../shared/constants/href"

import StyledContainer, { Links } from "./home/styles"

const HomePage = () => (
  <StyledContainer>
    <h1>Corte em Casa</h1>
    <main>
      <div className="content-block">
        <p>
          Escolha qual o serviço a ser realizado com um cabeleireiro disponivel
          proximo a você.
        </p>
        <div className="button-container">
          <Link href={HREF.LISTAR_CORTES}>
            <button>
              <span>Escolher corte</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="content-block">
        <p>
          Escolha um cabeleireiro especifico de nossa lista e agende um horário
        </p>
        <div className="button-container">
          <Link href={HREF.LISTAR_CABELEIREIROS}>
            <button>
              <span>Listar cabeleireiros próximos</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="content-block">
        <p>
          Ja sabe com quem quer cortar? Procure seu o cabeleireiro desejado pelo
          nome
        </p>
        <div className="button-container">
          <Link href={HREF.BUSCAR_CABELEIREIRO}>
            <button>
              <span>Buscar cabeleireiro</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
    <Links>
      <span>Log in</span> | <span>Cadastrar</span>
    </Links>
  </StyledContainer>
)

export default HomePage
