import React from 'react'
import { Data } from './Data'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3) 
`

const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
`

const Accordion = () => {
  return ( 
    <IconContext.Provider value = {{ color: `#00805b`, size: '1.3rem' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrapper>
                  <h3>{item.title}</h3>
                </Wrapper>
                  <p>{item.description}</p>
              </>
            )
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
   
  )
}

export default Accordion



