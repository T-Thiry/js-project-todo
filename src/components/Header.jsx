import styled from "styled-components"

export const Header = () => {
  return (
    <StyledHeader>
    <TextContent>
        <h1>ToDo Task Management</h1>
        <p>Stay organized with your personal task manager</p>
      </TextContent>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const TextContent = styled.div`
  text-align: center;
   margin: 0 1rem;

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
  }
  
    @media (min-width: 1024px) {
    h1 {
      font-size: 2rem;
    }
  }
`