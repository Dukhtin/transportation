import http from "../http-common";
class demands {
  getAll() {
    return http.get("/task/demands");
  }
  getrec(id) {
    return http.get(`/task/demand/${id}`);
  }
  getDemandForTrail(id) {
    return http.get(`/task/demandfortrail/${id}`);
  }
  create(data) {
    return http.post("/task/demand", data);
  }
  update(id, data) {
    return http.put(`/task/demand/${id}`, data);
  }
}
export default new demands();