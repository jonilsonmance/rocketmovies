import { Container } from './style';
import { LuClock3 } from 'react-icons/lu';

export function Datetime({dateTime}){
  return(
    <Container>
    <LuClock3 />
    {dateTime}
  </Container>

  )
}