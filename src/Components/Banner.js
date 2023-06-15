import logo from "../logo.svg";

const Banner = ({name,training}) => {
  const mycss = {
    color: "white",
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <img
            src={logo}
            alt="Avatar Logo"
            style={{ width: "40px" }}
            className="rounded-pill"
          />
          <span style={mycss} className="mx-auto">
            Welcome {name} to {training} Training!
          </span>
        </div>
      </nav>
    </>
  );
};

export default Banner;
