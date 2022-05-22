import styled from 'styled-components'

export const SCSectionTitle = styled.h2`
font-weight: 500 ;
margin-bottom: 2px;
font-size: 1.4rem;
text-align: ${({align}) => align ||'left'} ;
@media(max-width: 500px){
font-size: 1rem;
margin-bottom: 5px;
}
`