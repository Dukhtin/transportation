import http from "../http-common";
class trails {
  getdAll() {
    return http.get("/task/trails");
  }
  getrec(id) {
    return http.get(`/task/trail/${id}`);
  }
  create(data) {
    return http.post("/task/trail", data);
  }
  update(id, data) {
    return http.put(`/task/trail/${id}`, data);
  }

}
export default new trails();