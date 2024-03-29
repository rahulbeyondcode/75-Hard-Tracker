import EditModalButton from "components/challenge-tracker/Notifications/NotificationModal";

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

        <label htmlFor="water_drinking">
          Water drinking reminder every half hour
          <EditModalButton />
          <input type="checkbox" />
        </label>

        <label htmlFor="progress_reminder">
          Track your progress reminder every day 8pm
          <EditModalButton />
          <input type="checkbox" />
        </label>

        <label htmlFor="indoor_workout">
          Indoor workout reminder at 8:30am
          <EditModalButton />
          <input type="checkbox" />
        </label>

        <label htmlFor="outdoor_workout">
          Outdoor workout reminder at 6:00pm
          <EditModalButton />
          <input type="checkbox" />
        </label>

        <label htmlFor="book_reading">
          Book reading reminder at 9pm
          <EditModalButton />
          <input type="checkbox" />
        </label>

        <label htmlFor="progress_photo">
          Progress photo reminder at 8:30pm
          <EditModalButton />
          <input type="checkbox" />
        </label>

        <label htmlFor="measurements">
          Track your body measurements and weight
          <EditModalButton />
          <input type="checkbox" />
        </label>
      </form>
    </div>
  );
}

export default Notifications;
