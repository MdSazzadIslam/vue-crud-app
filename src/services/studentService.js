import http from "../config";

class studentService {
  get() {
    return http.get("/student");
  }

  getById(id) {
    return http.get(`/student/${id}`);
  }

  create(data) {
    return http.post("/student", data);
  }

  update(id, data) {
    return http.put(`/student/${id}`, data);
  }

  delete(id) {
    return http.delete(`/student/${id}`);
  }

  deleteAll() {
    return http.delete(`/student`);
  }
}

export default new studentService();
