import HeadingComponent from "./HeadingComponent";

function Layout({ children }) {
    return (
      <>
        <HeadingComponent />
        <main>{children}</main>
      </>
    );
  }

export default Layout;