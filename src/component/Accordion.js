import React from 'react'
import { Data } from './Data'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'

const AccordionSection = styled.div`
 
`

const Container = styled.div`

`

const Wrapper = styled.div`

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



