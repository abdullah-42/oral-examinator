<template>
  <div class="page">
    <div class="login-container">
      <div class="login-title">
        <h2>Bitte wähle deine Rolle</h2>
      </div>

      <div class="form-container">
        <button class="role-button" @click="selectRole('teacher')">Lehrer</button>
        <button class="role-button" @click="selectRole('student')">Schüler</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  methods: {
    selectRole(role) {
      this.$store.commit('setRole', role);
      this.$router.push(`/${role}`);
    },

  },
};
</script>


<style>
.page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  display: flex;
  flex-direction: column;
  width: 430px;
  margin: auto;
  padding: 50px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 30px;
}

.login-title {
  font-size: 1.5rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: stretch;
  margin-bottom: 15px;
}

.form-container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: stretch;
}

.role-button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.role-button:hover {
  background-color: #45a049;
}

.selected-role {
  margin-top: 20px;
  font-size: 1.2rem;
}
</style>
