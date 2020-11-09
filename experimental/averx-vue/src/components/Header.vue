<template>
<div id="counter">
    Counter: {{ counter }}
</div>
</template>

<script>
export default {
    name: 'Counter',
    props: {
        counter: String
    }
}
</script>
