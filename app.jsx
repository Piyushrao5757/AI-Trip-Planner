import React, { useState } from "react";

export default function TripPlannerUI() {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateTrip = () => {
    setLoading(true);

    setTimeout(() => {
      setResult(`🌍 ${destination} Luxury Trip\n📅 ${dates}\n💸 Budget: ₹${budget}\n\n✨ Day 1: Arrival + Explore\n✨ Day 2: Adventure + Food Tour\n✨ Day 3: Chill + Shopping\n\n🔥 Enjoy your trip!`);
      setLoading(false);
    }, 1200);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        color: "white",
        padding: "30px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: 500, margin: "auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "36px" }}>
          ✈️ AI Trip Planner
        </h1>
        <p style={{ textAlign: "center", color: "#bbb" }}>
          Plan your dream trip in seconds
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "20px",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
            marginTop: "20px",
          }}
        >
          <input
            placeholder="📍 Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="📅 Dates"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="💸 Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={inputStyle}
          />

          <textarea
            placeholder="✨ Describe your vibe (party, chill, luxury...)"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            style={{ ...inputStyle, height: "80px" }}
          />

          <button onClick={generateTrip} style={buttonStyle}>
            {loading ? "Generating..." : "Generate Trip 🚀"}
          </button>
        </div>

        {result && (
          <div
            style={{
              marginTop: "20px",
              background: "rgba(255,255,255,0.08)",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h2>✨ Your Plan</h2>
            <pre style={{ whiteSpace: "pre-wrap", color: "#ddd" }}>
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  background: "rgba(255,255,255,0.2)",
  color: "white",
};

const buttonStyle = {
  width: "100%",
  marginTop: "15px",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(90deg, #ff00cc, #3333ff)",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};
