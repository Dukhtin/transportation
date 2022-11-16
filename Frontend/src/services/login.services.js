import http from "../http-common";

class user {
  getuser(login, password) {
    return http.get(`/task/users/${login}/${password}`);
  }
}
export default new user();