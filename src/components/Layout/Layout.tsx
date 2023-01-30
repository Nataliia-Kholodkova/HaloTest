import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutPropsI {
  children: React.ReactNode[] | React.ReactNode;
}

export const Layout: React.FC<LayoutPropsI> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
