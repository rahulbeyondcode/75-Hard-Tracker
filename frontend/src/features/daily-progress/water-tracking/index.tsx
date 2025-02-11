function WaterTracking() {
  return (
    <div>
      <p>How many cups of water did you drink? (considering 1 cup = 250ml)</p>
      <button type="button">-</button>
      <input type="text" />
      <button type="button">+</button>

      <p>You consumed 0.75 litres of water</p>

      <hr />

      <button type="button">Cancel</button>
      <button type="button">Save</button>
    </div>
  );
}

export default WaterTracking;
