import http from "../http-common";
class accounts {
  getAll() {
    return http.get("/task/accounts");
  }
  getrec(id) {
    return http.get(`/task/account/${id}`);
  }

  //   create(data) {
  //     return http.post("/task/accounts", data);
  //   }
  //   update(id, data) {
  //     return http.put(`/task/accounts/${id}`, data);
  //   }
  //   postCreate() {
  //     return http.post("/task/accounts");
  //   }
}
export default new accounts();