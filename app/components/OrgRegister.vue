<template>
  <div class="signup">
      <!-- for students -->
    <form @submit.prevent="handleSubmit">
      <h3>Organizations</h3>
      <div class="name">
        <!-- <label for="name">Name</label> -->
        <div class="name-field">
          <div class="first-name">
            <!-- <label v-show="firstName" for="first-name">First Name</label> -->
            <input
              id="name"
              type="first-name"
              name="first-name"
              v-model="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div class="last-name">
            <!-- <label for="last-name">Last Name</label> -->
            <input
              id="name"
              type="last-name"
              name="last-name"
              v-model="lastName"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
      </div>
      <div class="org">
        <!-- <label for="org">Organization</label> -->
        <input id="org" type="org" name="org" v-model="org" placeholder="Organization" required />
      </div>
      <div class="email">
        <!-- <label for="email">Email</label> -->
        <input id="email" type="email" name="email" v-model="email" placeholder="Email" required />
      </div>
      <div class="pass">
        <!-- <label for="password">Password</label> -->
        <input id="password" type="password" name="password" v-model="password" placeholder="Password" required />
      </div>
      <div class="error" v-if="error">{{ error }}</div>
      <div class="btn">
        <Button>Sign Up</Button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: "OrganizationSignup",
}
</script>

<style lang="scss" scoped>
.signup {
  position: relative;
  width: 24rem;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    color: #151515;
    text-align: center;
    padding: 1rem;
  }
}
.name,
.email,
.pass,
.org {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    display: block;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    padding: 1rem;
    background: none;
    border: none;
    outline: none;
    color: #151515;
    font-size: 0.9rem;
    border-radius: 0.3rem;
    background: #f5f4f4;
    border: 1px solid #a1a1a1;    
    font-family: 'Kumbh Sans', sans-serif;
  }
}

.name,
.email,
.pass,
.org {
  padding-bottom: 1rem;
}

// .btn {
//   padding-top: 1rem;
// }

::placeholder {
  color: #242424;
  // opacity: 0.8;
}

.name-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .first-name  {
    width: 49%;
    display: flex;
    justify-content: start;
    align-items: center;

    input {
      z-index: 2;
    }

    label {
      position: absolute;
      font-family: 'Kumbh Sans', sans-serif;
      padding: 0.7rem;
    }
  }
  .last-name  {
    width: 49%;
    display: flex;
    justify-content: start;
    align-items: center;

    input {
      z-index: 2;
    }

    label {
      position: absolute;
    font-family: 'Kumbh Sans', sans-serif;
      padding: 0.7rem;
    }
  }
}

.error {
  position: absolute;
  padding-left: 1.5rem;
  color: red;
  font-family: 'Kumbh Sans', sans-serif;
}

.btn {
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 20rem;
        height: 3rem;
        border-radius: 0.3rem;
        background-color: skyblue;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
}
</style>