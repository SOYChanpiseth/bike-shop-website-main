import axios from "axios";

axios.defaults.baseURL = "http://localhost:8888"

export const state = () => ({
  bikes: [],
});

export const getters = {
  getAllBike(state) {
    return state.bikes;
  },
};

export const actions = {
  async getAllBike({ commit }) {
    await axios
      .get("/bike-service")
      .then(async (response) => {
        await commit("SET_ALL_BIKE", response);
      });
  },
};

export const mutations = {
  SET_ALL_BIKE(state, bikes) {
    state.bikes = bikes;
  },
};
