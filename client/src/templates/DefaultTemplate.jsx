import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Newsletter } from "../components/Footer/Newsletter/Newsletter";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
};
