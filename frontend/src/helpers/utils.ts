import uniqueId from "lodash.uniqueid";

const generateRandomString = () =>
  `${window.btoa(Math.random().toString()).substring(10, 15)}${uniqueId()}`;

const a = 1;

export { a, generateRandomString };
