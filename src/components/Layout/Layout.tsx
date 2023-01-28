import Header from "@/components/Header";
import Hero from "@/components/Hero";

interface LayoutPropsI {
  withHero?: boolean;
  children: React.ReactNode[] | React.ReactNode;
}

export const Layout: React.FC<LayoutPropsI> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
