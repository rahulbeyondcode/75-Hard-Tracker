import uniqueId from "lodash.uniqueid";

export const generateRandomString = () =>
  `${window.btoa(Math.random().toString()).substring(10, 15)}${uniqueId()}`;
