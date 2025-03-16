import * as Styles from "../styles/Error/Styles"

const Error = (): JSX.Element => {
  return (
    <Styles.SectionContainerError>
        <Styles.Error>Não foi possível encontrar um país com esse nome! </Styles.Error>
    </Styles.SectionContainerError>
  )
}

export default Error