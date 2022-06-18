<template>
    <div class="signin">
      <div class="error" v-if="error">{{ error }}</div>
        <form @submit.prevent="login" method="POST">
            <h3>Welcome back,</h3>
            <div class="email">
                <!-- <label for="email">Email</label> -->
                <input id="email" type="email" name="email" v-model="email" placeholder="Email" required />
            </div>
            <div class="pass">
                <!-- <label for="password">Password</label> -->
                <input id="password" type="password" name="password" v-model="password" placeholder="Password" required />
            </div>
            <div class="btn">
                <Button>Sign In</Button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Signin",
    data() {
      return {
        email: null,
        password: null,
        error: null,
      }
    },
    methods: {
      login: async function() {
        try {
          const res = await this.$axios.$post('/login', {
          email: this.email,
          password: this.password
        })
          console.log(res)
        } catch (error) {
          this.error = error.response.data
        }
      }
    },
}
</script>

<style lang="scss" scoped>
.signin {
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
.email,
.pass {
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

.email,
.pass {
  padding-bottom: 1rem;
}

// .btn {
//   padding-top: 1rem;
// }

::placeholder {
  color: #242424;
  // opacity: 0.8;
}

.error {
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