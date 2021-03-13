import { Footer } from "./footer";
import { Header } from "./header";

export const Layout: React.FC = (props) => {
  return (
    <div className="d-flex flex-column min-vh-100 py-7">
      <Header />
      <div className="container flex-grow-1">{props.children}</div>
      <Footer />
    </div>
  );
};
