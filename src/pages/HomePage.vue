<template>
    <Wrapper>
        <div class="homeBlock">
            <div class="homePage">
                <h1>Home page</h1>
                <div>
                    <p class="homeText">
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Similique exercitationem
                        eum dicta minus rem, dolorem quidem quisquam
                        fugiat atque iusto beatae quo. Ipsum ad
                        tempore neque quis odio quaerat sit?
                    </p>

                    <router-link to="/login" class="btn btn-auth">
                        Authorization
                    </router-link>

                </div>
            </div>

            <div class="homeImage">
                <img src="/tools.png" alt="home">
            </div>
        </div>
    </Wrapper>
</template>

<script setup lang="ts">
import Wrapper from '../shared/Wrapper/Wrapper.vue';


</script>

<style>
.viewBox {
    margin: 50px auto;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: baseline;
}

.homePage>h1 {
    color: var(--color-dark);
}

.homeText {
    width: 80%;
    margin-top: 2rem;
    margin-right: 0rem;
    margin-bottom: 2rem;
}

.homePage {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.homeBlock {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-auth {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    color: var(--color-white);
    background-color: var(--color-danger);
    transition: all 0.2s ease-in-out;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.1rem;
    font-size: 1.2rem;
    border: none;
    text-decoration: none;
}

.btn-auth:hover {
    background-color: var(--color-white);
    color: var(--color-primary);
}
</style>