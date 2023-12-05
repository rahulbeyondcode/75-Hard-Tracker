const PictureTracker = () => {
  return (
    <div>
      <p>Capture a progress image of yourself</p>
      <button>Open camera</button>
      <img src="image.jpg" alt="uploaded_image" />
      <button>Retake Image</button>

      <hr />

      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
};

export default PictureTracker;
