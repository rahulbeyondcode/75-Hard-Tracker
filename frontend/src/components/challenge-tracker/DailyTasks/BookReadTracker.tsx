const BookReadTracker = () => {
  return (
    <div>
      <p>Enter name of the book you are reading now</p>
      <input type="text" />

      <p>Enter the page numbers from where you started and stopped reading</p>
      <p>From</p>
      <input type="text" />
      <p>To</p>
      <input type="text" />
      <p>You have read 12 pages of Rich Dad Poor Dad today</p>

      <hr />

      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
};

export default BookReadTracker;
