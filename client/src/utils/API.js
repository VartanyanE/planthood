import axios from "axios";

export const getPlants = function (user_id) {
  return axios.get("/api/plants/" + user_id);
};
// Gets a specific plant with the given id
export const getPlant = function (id) {
  return axios.get("/api/plant/" + id);
};
// Deletes the plant with the given id
export const deletePlant = function (id) {
  return axios.delete("/api/plant/" + id);
};
// Saves a plant to the database
export const savePlant = function (plantData) {
  return axios.post("/api/plant", plantData);
};
export const getUser = function (user_id) {
  return axios.get("/api/user/" + user_id);
};
// Saves a plant to the database
export const saveUser = function (data) {
  return axios.post("/api/user", data);
};
export const getUsers = function () {
  return axios.get("/api/users");
};
export const loginUser = function (data) {
  return axios.post("/api/login", data);
};
export const getAccess = function (user_id) {
  return axios.get("/api/access/" + user_id);
};
// Saves access to the database
export const saveAccess = function (userData) {
  return axios.post("/api/access", userData);
};
// Deletes access given id
export const deleteAccess = function (id) {
  return axios.delete("/api/access/" + id);
};
