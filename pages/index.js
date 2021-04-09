import styled from "styled-components"

export default function App() {
  return (
    <Container>
      <h1>Corte em Casa</h1>
      <ul>
        <li>
          <button>
            Cortar com cabeleleiro disponivel
          </button>
        </li>
        <br />
        <li>
          <button>Listar cabeleiros proximos</button>
        </li>
        <br />
        <li>
          <button>Buscar cabeleiro por nome</button>
        </li>
      </ul>
      <div className="links">
        <span>Log in</span> | <span>Cadastrar</span>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--mainBlue-1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2.2rem;
    margin-top: 12px;
  }

  button {
    width: 93vw;
    background-color: var(--mainBlue2);
  }

  .links {
    font-size: 1.1rem;
    padding: 12px 0;
    color: var(--mainBlue3);

    span {
      margin: 0 5px;
    }
  }
`
