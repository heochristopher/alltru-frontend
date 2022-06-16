<template>
    <div class="filter">
        <div class="content">
            <div class="type">
                <label for="opportunities">Opportunity Type</label>
                <div class="select-menu">
                    <div class="select-btn">
                        <span class="sBtn-text">Select Type</span>
                        <img src="../assets/icons/chevron-down.svg" alt="down">
                    </div>
                    <ul class="options">
                        <li class="option">
                        <span class="option-text">All</span>
                        </li>
                        <li class="option">
                        <span class="option-text">Volunteer</span>
                        </li>
                        <li class="option">
                        <span class="option-text">Internships</span>
                        </li>
                        <li class="option">
                        <span class="option-text">Jobs</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="location">
                <label for="location">Location Preferences</label>
                <div class="toggler">
                    <div class="all">
                        <p>All</p>
                    </div>
                    <div class="onsite">
                        <p>On-site</p>
                    </div>
                    <div class="remote">
                        <p>Remote</p>
                    </div>
                </div>
            </div>
            <div class="search">
                <label for="zip">Search Zipcode</label>
                <img class="pin" src="../assets/icons/map-pin.svg" alt="pin">
                <input class="searchbar" id="zip" type="number" placeholder="Anywhere" maxlength="5">
            </div>
            <!-- <div class="tags">
            </div> -->
            <div class="search-btn">
                <button>Search</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
.filter {
    display: flex;
    justify-content: center;
    align-items: start;
    height: 100vh;
    width: 90%;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.type, .location, .search {
    margin: 1rem 0;
}

.select-menu {
    width: 20rem;
    font-family: 'Kumbh Sans', sans-serif;

    .select-btn {
        display: flex;
        height: 3rem;
        margin: 0.5rem 0;
        background: #f5f4f4;
        padding: 1rem;
        // padding-top: 1.5rem;
        font-size: 0.9rem;
        border-radius: 0.3rem;
        align-items: center;
        cursor: pointer;
        justify-content: space-between;
        // box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        border: 1px solid #a1a1a1;
    }

    &.active .select-btn img {
        transform: rotate(-180deg);
    }
    .options {
        position: absolute;
        width: 20rem;
        padding: 1rem;
        margin-top: 0.5rem;
        border-radius: 0.3rem;
        background: #f5f4f4;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border: 1px solid #a1a1a1;
        display: none;
        z-index: 3;
        .option {
            display: flex;
            height: 3rem;
            cursor: pointer;
            padding: 0 1rem;
            border-radius: 0.3rem;
            align-items: center;
            background: #f5f4f4;

            &:hover {
                background: #d9d9d9;
            }
        }
    }
    &.active .options {
        display: block;
        opacity: 0;
        animation-name: fadeDown;
        -webkit-animation-name: fadeDown;
        animation-duration: 0.3s;
        animation-fill-mode: both;
        -webkit-animation-duration: 0.4s;
        -webkit-animation-fill-mode: both;
    }
}

@keyframes fadeDown {
    from {
        transform: translate3d(0, -25px, 0);
    }
    to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

.toggler {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    margin: 0.5rem 0;
    border-radius: 0.3rem;
    border: 1px solid #a1a1a1;
    .all, .onsite, .remote {
        width: 33.33%;
        height: 3rem;
        background-color: #f5f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;

        p {
            font-size: 0.9rem;
        }
        &:hover {
            background-color: skyblue;
        }
    }

    .all, .onsite {
        border-right: 1px solid #a1a1a1;
    }
}
.search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    .searchbar {
        margin: 0.5rem 0;
        width: 20rem;
        height: 3rem;
        padding: 1rem 2.4rem;
        background-color: #f5f4f4;
        border: 1px solid #a1a1a1;
        border-radius: 0.3rem;
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 0.9rem;
    }
    .pin {
        position: absolute;
        margin: 0.5rem;
    }
}

::placeholder {
    font-size: 0.9rem;
    font-family: 'Kumbh Sans', sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.search-btn {
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