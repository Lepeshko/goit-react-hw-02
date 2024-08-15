import "./Options.css";

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div>
      <button
        className="button good-button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className="button neutral-button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className="button bad-button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className="button reset-button" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
