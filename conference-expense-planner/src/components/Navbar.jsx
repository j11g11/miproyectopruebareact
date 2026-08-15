function Navbar({ onShowDetails }) {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        Conference Expense Planner
      </div>

      <div className="navbar-links">
        <a href="#rooms">Rooms</a>
        <a href="#addons">Add-ons</a>
        <a href="#meals">Meals</a>

        <button
          className="details-button"
          onClick={onShowDetails}
        >
          Show Details
        </button>
      </div>
    </nav>
  );
}

export default Navbar;