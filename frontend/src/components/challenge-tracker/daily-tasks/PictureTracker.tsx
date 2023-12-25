function PictureTracker() {
  return (
    <div>
      <p>Capture a progress image of yourself</p>
      <button type="button">Open camera</button>
      <img src="image.jpg" alt="uploaded_image" />
      <button type="button">Retake Image</button>

      <hr />

      <button type="button">Cancel</button>
      <button type="button">Save</button>
    </div>
  );
}

export default PictureTracker;
