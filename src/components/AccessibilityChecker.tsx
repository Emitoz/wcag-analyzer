import React, { useState } from "react";
import axe from "axe-core";

const AccessibilityChecker: React.FC = () => {
  const [results, setResults] = useState<string[]>([]);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const testExternalUrl = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl);
      const html = await response.text();
      
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      axe.run(doc.body, (err, result) => {
        if (err) {
          setResults(['Error running accessibility check.']);
          return;
        }
        const violations = result.violations.map(
          (violation) => `${violation.id}: ${violation.description}`
        );
        setResults(violations);
      });
    } catch (error) {
      setResults(['Failed to fetch the URL.']);
    } finally {
      setLoading(false);
    }
  };

  const exportResults = () => {
    const data = JSON.stringify(results, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "accessibility-results.json";
    a.click();
  };

  console.log("Results", results);
  

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <h1 style={{ marginBottom: 0 }}>Web Accessibility Checker</h1>

      <p style={{ maxWidth: 560, marginBottom: 40 }}>Check your website for ADA & WCAG compliance with our free tool. Instantly identify accessibility issues and get clear, actionable fixes. Enter your URL to begin!</p>

      <form onSubmit={testExternalUrl} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginBottom: 40 }}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className=""
        />
        <button disabled={loading} type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          {loading ? "Please wait..." : "Analyze Website"}
        </button>
      </form>

      <div className="mt-4">
        {results.length > 0 ? (
          <div>
            <ul className="">
              {results.map((violation: any, index) => (
                <li key={index} className="text-red-600">
                  <strong>{violation.split(":")[0]}</strong>: {violation.split(":")[0]}
                </li>
              ))}
            </ul>
            <button
              onClick={exportResults}
              className=""
            >
              Export Results
            </button>
          </div>
        ) : (
          <p className="text-gray-600">No accessibility issues found.</p>
        )}
      </div>
    </div>
  );
};

export default AccessibilityChecker;
