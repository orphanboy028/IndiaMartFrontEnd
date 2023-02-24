import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";
export default function Layout({ children }) {
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>

        <div>{children}</div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
