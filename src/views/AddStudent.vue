<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="student.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="department">Department</label>
        <input
          class="form-control"
          id="department"
          required
          v-model="student.department"
          name="department"
        />
      </div>

      <div class="form-group">
        <label for="subject">Subject</label>
        <input
          class="form-control"
          id="subject"
          required
          v-model="student.subject"
          name="subject"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>
<script>
import studentService from "../services/studentService";

export default {
  name: "add-Student",
  data() {
    return {
      student: {
        id: null,
        name: "",
        department: "",
        subject: "",
        published: false,
      },
      submitted: false,
    };
  },

  methods: {
    saveStudent() {
      var data = {
        name: this.student.name,
        department: this.student.department,
        subject: this.student.subject,
      };

      studentService
        .create(data)
        .then((response) => {
          this.student.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    newStudent() {
      this.submitted = false;
      this.student = {};
    },
  },
};
</script>
