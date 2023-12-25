import { useState } from "react";
import { Dialog } from "@headlessui/react";

import { generateRandomString } from "helpers/utils";

function NotificationModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Edit
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Update water drinking notification</Dialog.Title>
          <p>Choose the pattern in which you want to receive notification</p>
          <select>
            <option value="one_hour">Hourly</option>
            <option value="half_hour">Half hourly</option>
            <option value="two_hours">Every 2 hours</option>
            <option value="six_hours">Every 6 hours</option>
            <option value="twelve_hours">Every 12 hours</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Biweekly</option>
            <option value="weekends">Weekend only</option>
            <option value="weekdays">Weekdays only</option>
          </select>

          <p>At what time you want your updated initial notification</p>
          <select>
            {Array(13)
              .fill(undefined)
              .map((_arrItem, index) => {
                if (index > 0) {
                  return (
                    <option value="" key={generateRandomString()}>
                      {index < 10 ? `0${index}` : index}
                    </option>
                  );
                }
                return (
                  <option value="" key={generateRandomString()} disabled>
                    Select
                  </option>
                );
              })}
          </select>

          <select>
            {Array(13)
              .fill(undefined)
              .map((_arrItem, index) => (
                <option value="" key={generateRandomString()}>
                  {index * 5 < 10 ? `0${index * 5}` : index * 5}
                </option>
              ))}
          </select>

          <select>
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
          <button type="button" onClick={() => setIsOpen(false)}>
            Update Preference
          </button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default NotificationModal;
