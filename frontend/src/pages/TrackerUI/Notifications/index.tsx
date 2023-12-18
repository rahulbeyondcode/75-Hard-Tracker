import EditModalButton from "components/challenge-tracker/Notifications/NotificationModal";

const Notifications = () => {
  return (
    <div>
      <h1>Notifications Settings</h1>
      <label htmlFor="all_notification">
        Disable all notifications
        <EditModalButton />
      </label>
      <input type="checkbox" />

      <label htmlFor="water_drinking">
        Water drinking reminder every half hour
        <EditModalButton />
      </label>
      <input type="checkbox" />

      <label htmlFor="progress_reminder">
        Track your progress reminder every day 8pm
        <EditModalButton />
      </label>
      <input type="checkbox" />

      <label htmlFor="indoor_workout">
        Indoor workout reminder at 8:30am
        <EditModalButton />
      </label>
      <input type="checkbox" />

      <label htmlFor="outdoor_workout">
        Outdoor workout reminder at 6:00pm
        <EditModalButton />
      </label>
      <input type="checkbox" />

      <label htmlFor="book_reading">
        Book reading reminder at 9pm
        <EditModalButton />
      </label>
      <input type="checkbox" />

      <label htmlFor="progress_photo">
        Progress photo reminder at 8:30pm
        <EditModalButton />
      </label>
      <input type="checkbox" />

      <label htmlFor="measurements">
        Track your body measurements and weight
        <EditModalButton />
      </label>
      <input type="checkbox" />
    </div>
  );
};

export default Notifications;
