import React, { useState } from 'react'
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
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  border-radius: .5rem;
`

const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  cursor: pointer;

  h3 {
    padding: 1rem;
    font-size: 1rem;
  }

  span {
    margin: 1.5rem;
  }

  p {
    font-size: 2rem;
  }
`

const Dropdown = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`

const Accordion = () => {
  const [clicked, setClicked] = useState(false)
  const toggle = index => {
    if(clicked === index){
      return setClicked(null)
    }
    setClicked(index)
  } 

  return ( 
    <IconContext.Provider value = {{ color: `#00805b`, size: '1.3rem' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
               <div>
                <Wrapper onClick={() => toggle(index)} key={index}>
                  <h3>{item.title}</h3>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrapper>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.description}</p>
                    </Dropdown>
                  ): null}
              </div>
            )
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
   
  )
}

export default Accordion



