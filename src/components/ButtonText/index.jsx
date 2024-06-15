import { Container } from './style';

export function ButtonText({title,children, ...rest}){
  return(
    <Container
      type="button"
      {...rest}
    >
      {children}
      {title}

    </Container>

  )
}