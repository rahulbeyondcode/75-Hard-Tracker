import EditModalButton from "components/challenge-tracker/notifications/NotificationModal";

function Notifications() {
  return (
    <div>
      <h1>Notifications Settings</h1>
      <form>
        <label htmlFor="all_notification">
          Disable all notifications
          <EditModalButton />
          <input id="all_notification" type="checkbox" />
        </label>
        <br />

        <label htmlFor="water_drinking">
          Water drinking reminder every half hour
          <EditModalButton />
          <input type="checkbox" />
        </label>
        <br />

        <label htmlFor="progress_reminder">
          Track your progress reminder every day 8pm
          <EditModalButton />
          <input type="checkbox" />
        </label>
        <br />

        <label htmlFor="indoor_workout">
          Indoor workout reminder at 8:30am
          <EditModalButton />
          <input type="checkbox" />
        </label>
        <br />

        <label htmlFor="outdoor_workout">
          Outdoor workout reminder at 6:00pm
          <EditModalButton />
          <input type="checkbox" />
        </label>
        <br />

        <label htmlFor="book_reading">
          Book reading reminder at 9pm
          <EditModalButton />
          <input type="checkbox" />
        </label>
        <br />

        <label htmlFor="progress_photo">
          Progress photo reminder at 8:30pm
          <EditModalButton />
          <input type="checkbox" />
        </label>
        <br />

        <label htmlFor="measurements">
          Track your body measurements and weight
          <EditModalButton />
          <input type="checkbox" />
        </label>
        <br />
      </form>
    </div>
  );
}

export default Notifications;
