import StyledContainer, { Links } from "./home/styles"

const HomePage = () => (
  <StyledContainer>
    <h1>Corte em Casa</h1>
    <main>
      <div>
        <p>
          Escolha qual o serviço a ser realizado com um cabeleleiro disponivel
          proximo a você.
        </p>
        <button>Cortar com cabeleleiro disponivel</button>
      </div>
      <div>
        <p>
          Escolha um cabeleleiro especifico de nossa lista e agende um horário
        </p>
        <button>Listar cabeleiros proximos</button>
      </div>
      <div>
        <p>
          Ja sabe com quem quer cortar? Procure o cabeleleiro desejado por nome
        </p>
        <button>Buscar cabeleiro</button>
      </div>
    </main>
    <Links>
      <span>Log in</span> | <span>Cadastrar</span>
    </Links>
  </StyledContainer>
)

export default HomePage
