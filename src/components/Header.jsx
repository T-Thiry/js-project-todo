import styled from "styled-components"
import headerImg from "/src/assets/images/Task_management.png"


export const Header = () => {
  return (
    <StyledHeader>
    <TextContent>
        <h1>ToDo Task Management</h1>
        <p>Stay organized with your personal task manager</p>
      </TextContent>
      <HeaderImage src={headerImg} alt="Task management" width="500" height="300" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TextContent = styled.div`
  text-align: center;
   margin: 1rem 1rem 0 1rem;

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    padding: 0 1rem
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1.125rem;
    }

     margin: 1rem;
  }
  
    @media (min-width: 1024px) {
    h1 {
      font-size: 2rem;
    }
  }
`

const HeaderImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  padding: 1rem;
  box-sizing: border-box; 

  @media (min-width: 768px) {
    padding: 0;
  }
`