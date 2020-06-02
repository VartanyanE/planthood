import axios from "axios";

export default {
    // Gets all plants by user_id
    getPlants: function (user_id) {
        return axios.get("/api/plants/" + user_id);
    },
    // Gets a specific plant with the given id
    getPlant: function (id) {
        return axios.get("/api/plant/" + id);
    },
    // Deletes the plant with the given id
    deletePlant: function (id) {
        return axios.delete("/api/plant/" + id);
    },
    // Saves a plant to the database
    savePlant: function (plantData) {
        return axios.post("/api/plant", plantData);
    },
    getUser: function (user_id) {
        return axios.get("/api/user/" + user_id);
    },
    // Saves a plant to the database
    saveUser: function (userData) {
        return axios.post("/api/user", userData);
    }
};
