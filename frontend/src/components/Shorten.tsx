import { FormEvent, useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!url.trim()) {
      setErrorMessage("Please add a link");
    } else {
      setErrorMessage("");
      console.log("URL entered:", url); // For testing purposes
    }
  };

  return (
    <section className="shorten">
      <div className="container">
        {/* Shorten content */}
        <div className="shorten__content">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-control">
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className={`${errorMessage ? "error-input" : ""}`}
                type="text"
                placeholder="Shorten a link here..."
              />
              {errorMessage && <p className="error-text">{errorMessage}</p>}
            </div>

            <button className="btn" datatype="wide" type="submit">
              Shorten It!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Shorten;
