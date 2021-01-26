<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by name"
          v-model="name"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="getStudentById"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Tutorials List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentTutorial.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentTutorial.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>

        <a
          class="badge badge-warning"
          :href="'/tutorials/' + currentTutorial.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import studentService from "../services/studentService";
export default {
  name: "student-list",
  data() {
    return {
      students: [],
      currentStudent: null,
      currentIndex: -1,
      name: "",
    };
  },
  methods: {
    getStudent() {
      studentService
        .get()
        .then((response) => {
          this.students = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getStudentById() {
      studentService
        .getById(this.name)
        .then((response) => {
          this.students = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    refreshRecord() {
      this.getStudent();
      this.currentStudent = null;
      this.currentIndex = -1;
    },

    removeAllStudent() {
      studentService
        .deleteAll()
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    mounted() {
      this.getStudent();
    },
  },
};
</script>