<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
.wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>