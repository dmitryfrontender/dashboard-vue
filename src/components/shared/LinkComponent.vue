<template>
    <a
        :href="url"
        :title="title"
        :target="target"
        :rel="rel"
        class="link"
        :class="className"
    >
        <slot />
    </a>
</template>

<script>
export default {
    name: 'LinkComponent',
    props: {
        url: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        className: {
            type: String,
            default: ''
        },
        target: {
            type: String,
            default: ''
        },
        rel: {
            type: String,
            default: ''
        }
    }
}
</script>