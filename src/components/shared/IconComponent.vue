<template>
    <i :class="className"></i>
</template>

<script>
export default {
    name: 'IconComponent',
    props: {
        className: {
            type: String,
            default: ''
        }
    }
}
</script>