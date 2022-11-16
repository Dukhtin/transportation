import http from "../http-common";
class parameters {
  getlist(type) {
    return http.get(`/task/parameters/${type}`);
  }
  create(data) {
    return http.post("/task/parameter", data);
  }
  update(id, data) {
    return http.put(`/task/parameter/${id}`, data);
  }
}
export default new parameters();