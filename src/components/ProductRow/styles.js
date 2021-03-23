import styled from '@emotion/styled'

export const GridRow = styled.div`
  display: grid;
  grid-template-column: repeat(1, 1fr);
  gap: 2.5rem;
  padding-top:350px;
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom:solid 1px #fff;
`

export const Title = styled.h2`
  font-size: 1rem;
  text-align: left;
  margin:0;
  padding:0;
`


export const PriceTag = styled.h2`
  font-size: 1rem;
  text-align: left;
  margin:0;
  padding:0;
  padding-bottom:0.5rem;
  // :before {
  //   content: '- ';
}
`

export const DescriptionTextContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: start;
}`

export const DescriptionText = styled.div`

}`

export const TextToggle = styled.button`
  display:flex;
  justify-content:center;
  cursor:pointer;
  font-size:1rem;
  text-decoration:NONE;  
  align-items: center;   
  width: max-content;
  margin:.5rem 0;
  padding:0;
  &:hover{
    color:#fff;
  }`

export const DotToggle = styled.span`
}`

export const IngredientText = styled.p`

}`

// export const QuantityNum = styled.p`

// }`

// export const QuantityText = styled.p`

// }`

// export const Purchase = styled.p`

// }`