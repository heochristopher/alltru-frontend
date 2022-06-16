<template>
  <div class="signup">
      <!-- for students -->
    <form @submit.prevent="handleSubmit">
      <h3>Students</h3>
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
      <div class="school">
        <!-- <label for="school">School</label> -->
        <input id="school" type="School" name="school" v-model="school" placeholder="School" required />
      </div>
      <div class="grade">

            <!-- <label for="grade">Graduating Year</label> -->
            <input id="age" type="date" name="age" v-model="age" placeholder="Date of Birth" required />
                <!-- <div class="select-menu">
                    <div class="select-btn">
                        <span class="sBtn-text">Graduating Year</span>
                        <img src="../assets/icons/chevron-down.svg" alt="down">
                    </div>
                    <ul class="options">
                        <li class="option">
                        <span class="option-text">2023</span>
                        </li>
                        <li class="option">
                        <span class="option-text">2024</span>
                        </li>
                        <li class="option">
                        <span class="option-text">2025</span>
                        </li>
                        <li class="option">
                        <span class="option-text">2026</span>
                        </li>
                    </ul>
                </div> -->
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
        <button>Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: "StudentSignup",
    mounted() {
        const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".sBtn-text");

        selectBtn.addEventListener("click", () =>
        optionMenu.classList.toggle("active")
        );

        options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;

            optionMenu.classList.remove("active");
        });
        });
    }
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
.school,
.grade {
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

// .select-menu {
//     width: 20rem;
//     font-family: 'Kumbh Sans', sans-serif;

//     .select-btn {
//         display: flex;
//         height: 3rem;
//         margin: 0.5rem 0;
//         background: #f5f4f4;
//         color: #242424;
//         padding: 1rem;
//         // padding-top: 1.5rem;
//         font-size: 0.9rem;
//         border-radius: 0.3rem;
//         align-items: center;
//         cursor: pointer;
//         justify-content: space-between;
//         // box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
//         border: 1px solid #a1a1a1;
//     }

//     &.active .select-btn img {
//         transform: rotate(-180deg);
//     }
//     .options {
//         position: absolute;
//         width: 20rem;
//         padding: 1rem;
//         margin-top: 0.5rem;
//         border-radius: 0.3rem;
//         background: #f5f4f4;
//         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         border: 1px solid #a1a1a1;
//         display: none;
//         z-index: 3;
//         .option {
//             display: flex;
//             height: 3rem;
//             cursor: pointer;
//             padding: 0 1rem;
//             border-radius: 0.3rem;
//             align-items: center;
//             background: #f5f4f4;

//             &:hover {
//                 background: #d9d9d9;
//             }
//         }
//     }
//     &.active .options {
//         display: block;
//         opacity: 0;
//         animation-name: fadeDown;
//         -webkit-animation-name: fadeDown;
//         animation-duration: 0.3s;
//         animation-fill-mode: both;
//         -webkit-animation-duration: 0.4s;
//         -webkit-animation-fill-mode: both;
//     }
// }

// @keyframes fadeDown {
//     from {
//         transform: translate3d(0, -25px, 0);
//     }
//     to {
//         transform: translate3d(0, 0, 0);
//         opacity: 1;
//     }
// }

</style>