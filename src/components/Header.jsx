import styled from "styled-components"
import headerImg from "/src/assets/images/Sharing_thoughts.png"


export const Header = () => {
  return (
    <StyledHeader>
    <TextContent>
        <h1>ToDo Task Management</h1>
        <p>Stay organized with your personal task manager</p>
      </TextContent>
      <HeaderImage src={headerImg} alt="Task management" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
      flex-direction: row;
    }
`

const TextContent = styled.div`
  text-align: center;
   margin: 1rem 2rem;

  h1 {
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 1.5rem;
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
  width: 120px;
  height: auto;
`