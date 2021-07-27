import Header from "../Header/Header";

function MainLayout(props) {
  return (
    <>
      <Header></Header>
      <div>{props.children}</div>
    </>
  );
}

export default MainLayout;
