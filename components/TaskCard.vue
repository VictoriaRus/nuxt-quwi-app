<template>
  <div class="card">

    <Modal v-if="isModalVisible" @closeModel="closeModel">
      <div class="model-header">
        <img
          v-if="task.logo_url"
          :src="task.logo_url"
          :alt="task.name">
        <Avatar
          v-else
          :name="task.name"
        />
        <h6>{{ task.name }}</h6>
      </div>
      <div class="model-body">
        <p>You can change name project</p>
        <Input
          :value="name"
          v-model="name"
          type="text"
        />
      </div>
      <Button :onClick="save">Save</Button>
    </Modal>

    <div class="col card__header">
      <div class="card__img">
        <img
          v-if="task.logo_url"
          :src="task.logo_url"
          :alt="task.name"
        >
        <Avatar
          v-else
          :name="task.name"/>
      </div>
      <h4 class="card__title" @click="showModel">{{ task.name }}</h4>
    </div>
    <div class="col card__status">{{ is_active }}</div>
    <div class="col card__time">
      <div class="time">time this week <span>00:00:00</span></div>
      <div class="time">this month <span>00:00:00</span></div>
      <div class="time">total <span>00:00:00</span></div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Modal from "@/components/Modal";

export default {
  name: "TaskCard",
  props: ["task"],
  components: { Avatar, Modal },
  data() {
    return {
      isModalVisible: false,
      name: this.task.name,
    }
  },
  computed: {
    is_active() {
      return this.task.is_active ? "Active" : "Inactive"
    }
  },
  methods: {
    showModel() {
      this.isModalVisible = true;
    },
    closeModel() {
      this.isModalVisible = false;
    },
    async save() {
      await fetch(`https://api.quwi.com/v2/projects-manage/update?id=${ this.task.id }`, {
        method: "POST",
        body: JSON.stringify({
          "name": this.name
        }),
        headers: {
          "Authorization": `Bearer ${ localStorage.getItem("token") }`,
          "Content-type": "application/json; charset=UTF-8",
        }
      })
        .then(response => response.json())
        .then(response => {
          console.log(response.project);
          this.$store.commit("tasks/setChangeNameTask", response.project);
          this.closeModel();
        })
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #dedede;
  padding: 20px;
  color: #000;
  margin: 0 auto 7px;
  border-radius: 5px;
  word-spacing: 1px;
}

.col {
  width: 33.3%;
}

.card__header {
  display: flex;
  align-items: center;
}

.card__img {
  width: 51px;
  border-radius: 50%;
}

.card__img img {
  width: 100%;
}

.card__title {
  margin-left: 20px;
  cursor: pointer;
}

.card__status {
  font-weight: 600;
  text-align: center;
  color: #64c400;
}

.time {
  display: flex;
  justify-content: space-between;
}

.time span {
  font-weight: 600;
}

.model-header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 70px;
}

.model-header img {
  width: 51px;
}

.model-header h6 {
  font-size: 18px;
}

.model-body {
  margin-bottom: 25px;
}

.model-body p {
  margin-bottom: 20px;
  font-size: 16px;
}

@media screen and (max-width: 415px) {
  .card {
    flex-direction: column;
  }

  .col {
    width: 100%;
  }
}
</style>
