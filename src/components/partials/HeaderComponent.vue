<template>
    <header id="header" class="fixed-to-top">
        <div class="header-container">
            <h1>Awesome header</h1>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
#header {
    width: 100%;
    border-bottom: 1px solid #e3e3e3;
    background-color: #fff;

    .header-container {
        padding: 15px 20px;
        text-align: end;
    }
}
</style>
