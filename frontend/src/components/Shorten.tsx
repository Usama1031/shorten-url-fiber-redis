import { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!url) {
      setErrorMessage("Please add a link");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/v1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortenedUrl(data.short);
        setErrorMessage("");
      } else {
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setErrorMessage("Server error, please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="shorten">
      <div className="container">
        <div className="shorten__content">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-control">
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className={errorMessage ? "error-input" : ""}
                type="text"
                placeholder="Shorten a link here..."
              />
              {errorMessage && <p className="error-text">{errorMessage}</p>}
            </div>

            <button className="btn" datatype="wide" disabled={loading}>
              {loading ? "Loading..." : "Shorten It!"}
            </button>
          </form>
        </div>

        {shortenedUrl && (
          <div className="shorten__card">
            <div className="shorten__link">
              <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                {shortenedUrl}
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shortenedUrl);
                  alert("Shortened URL copied to clipboard!");
                }}
                className="copy-btn"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shorten;
