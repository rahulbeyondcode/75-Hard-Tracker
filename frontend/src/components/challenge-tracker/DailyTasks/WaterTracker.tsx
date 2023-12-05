const WaterTracker = () => {
  return (
    <div>
      <p>How many cups of water did you drink? (considering 1 cup = 250ml)</p>
      <button>-</button>
      <input type="text" />
      <button>+</button>

      <p>You consumed 0.75 litres of water</p>

      <hr />

      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
};

export default WaterTracker;
