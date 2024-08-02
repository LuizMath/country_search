import { Triangle } from "react-loader-spinner";
import { MainSection } from "../styles/Loader/Styles";

const Loader = () => {
  return (
    <MainSection>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
      />
    </MainSection>
  );
};

export default Loader;
