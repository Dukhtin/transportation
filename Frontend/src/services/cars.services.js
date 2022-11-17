import http from "../http-common";
class cars {
  getlist(type) {
    return http.get(`/task/cars/${type}`);
  }
  create(data) {
    return http.post("/task/car", data);
  }
  update(id, data) {
    return http.put(`/task/car/${id}`, data);
  }
}
export default new cars();