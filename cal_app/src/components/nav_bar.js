import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* <a className="navbar-item" href="/">
          <img
            // TODO: replace LOGO
            src="https://bulma.io/images/bulma-logo.png"
            width={112}
            height={28}
            alt="logo"
          />
        </a> */}
        {/* TODO: HAMBURGER MENU BELOW */}
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link
            to="/"
            className="navbar-item"
            style={{ fontWeight: "700", fontSize: "25px" }}
          >
            Home
          </Link>
          <Link to="/planning" className="navbar-item">
            Planning
          </Link>
          <Link to="/events" className="navbar-item">
            All Events
          </Link>
          <Link to="/venues" className="navbar-item">
            Manage Venues
          </Link>
          {/* TODO: DROP DOWN MENU BELOW */}
          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div> */}
        </div>
        <div className="navbar-end">
          {/* <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="/signup">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light" href="/login">
                Log in
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
