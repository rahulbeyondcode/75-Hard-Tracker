import _ from "lodash";

const generateRandomString = () => `${window.btoa(Math.random().toString()).substring(10, 15)}${_.uniqueId()}`;

const a = 1;

export { a, generateRandomString };
