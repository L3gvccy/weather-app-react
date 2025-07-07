export default function Search() {
  return (
    <div className="search">
      <form className="d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="form-control me-2 rounded-pill"
          placeholder="Пошук міста..."
          aria-label="Search"
          data-bs-theme="dark"
        />
        <button className="btn btn-outline-success rounded-pill" type="submit">
          Знайти
        </button>
      </form>
    </div>
  );
}
