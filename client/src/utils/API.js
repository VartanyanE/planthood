import axios from "axios";

export const getPlants = function (user_id) {
  return axios.get("/api/plants/user/" + user_id);
};
// Gets a specific plant with the given id
export const getPlant = function (id) {
  return axios.get("/api/plants/" + id);
};
// Deletes the plant with the given id
export const deletePlant = function (id) {
  return axios.delete("/api/plants/" + id);
};
// Saves a plant to the database
export const savePlant = function (plantData) {
  return axios.post("/api/plants", plantData);
};
export const getUser = function (user_id) {
  return axios.get("/api/users/user/" + user_id);
};
// Saves a plant to the database
export const saveUser = function (data) {
  return axios.post("/api/users", data);
};
export const getUsers = function () {
  return axios.get("/api/users");
};
export const loginUser = function (data) {
  return axios.post("/api/users/login", data);
};
export const getAccess = function (user_id) {
  return axios.get("/api/access/" + user_id);
};

export const logoutUser = function () {
  return axios.get("/api/users/logout/");
};

export const getSitterAccess = function (user_id) {
  return axios.get("/api/access/sitter/" + user_id);
};
// Saves access to the database
export const saveAccess = function (userData) {
  return axios.post("/api/access", userData);
};
// Deletes access given id
export const deleteAccess = function (id) {
  return axios.delete("/api/access/" + id);
};

export const browsePlants = function () {
  return axios.get("/api/search");
};

export const browsePlant = function (common_name) {
  return axios.get("/api/search/browse/" + common_name);
};

export const addRemovePlant = function(pId, uId, action){
  return axios.put(`/api/users/fav/${action}/${uId}/${pId}`)
}
