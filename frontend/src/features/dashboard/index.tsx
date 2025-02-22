import { generateRandomString } from "helpers/utils";
import { useEffect, useRef } from "react";

function Dashboard() {
  const dbRef = useRef<IDBDatabase | null>(null);

  useEffect(() => {
    const dbOpenRequest = indexedDB.open("75_hard_tracker_db", 1);

    dbOpenRequest.onerror = () => {
      console.log("Error");
    };

    dbOpenRequest.onsuccess = (event) => {
      dbRef.current = (event.target as IDBOpenDBRequest)?.result;
    };

    dbOpenRequest.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest)?.result;

      const oldVersion = event.oldVersion;
      const newVersion = event.newVersion;

      console.log(`DB upgraded from v${oldVersion} to v${newVersion}`);

      if (!db.objectStoreNames.contains("dashboard")) {
        db.createObjectStore("dashboard", {
          keyPath: "id",
        });
      }
    };
  }, []);

  const handleAdd = () => {
    const db = dbRef.current!;

    const userData = {
      id: generateRandomString(),
      name: `Harriet Bass ${generateRandomString()}`,
      address: `571  ${generateRandomString()} Poze View`,
      age: 26,
    };

    const transaction = db.transaction("dashboard", "readwrite");

    const store = transaction.objectStore("dashboard");
    const request = store.add(userData);

    request.onsuccess = (event) => {
      console.log("Success: ", event);
    };

    request.onerror = (err) => {
      console.log("Error: ", err);
    };
  };

  const handleList = () => {
    const db = dbRef.current!;

    const transaction = db.transaction("dashboard", "readonly");

    const store = transaction.objectStore("dashboard");

    const request = store.getAll();

    request.onsuccess = (event) => {
      console.log("Success: ", (event.target as IDBOpenDBRequest)?.result);
    };

    request.onerror = (err) => {
      console.log("Error: ", err);
    };
  };

  const handleDelete = () => {
    const db = dbRef.current!;

    const transaction = db.transaction("dashboard", "readwrite");

    const store = transaction.objectStore("dashboard");

    const request = store.delete("KEY_HERE");

    request.onsuccess = (event) => {
      console.log("Success: ", (event.target as IDBOpenDBRequest)?.result);
    };

    request.onerror = (err) => {
      console.log("Error: ", err);
    };
  };

  const handleUpdate = () => {
    const db = dbRef.current!;

    const userData = {
      id: "I1NTU4",
      name: `Rahul ${generateRandomString()}`,
      address: `1738  ${generateRandomString()} Yoww`,
      age: 15,
    };

    const transaction = db.transaction("dashboard", "readwrite");

    const store = transaction.objectStore("dashboard");
    const request = store.put(userData);

    request.onsuccess = (event) => {
      console.log("Success: ", event);
    };

    request.onerror = (err) => {
      console.log("Error: ", err);
    };
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleList}>List</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Dashboard;
