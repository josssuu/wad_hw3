<template>
    <div>

    </div>
</template>

<script>
export default {
name: "DropDownMenu"
}
</script>

<style scoped>
.drop-down-container {
    position: absolute;
    min-width: 150px;
    height: auto;
    background-color: #ffffff;
    padding: 10px;
    right: 0;
    top: 50px;
    text-align: left;
    display: none;
}

.drop-down-container span{
    display: block;
}

.drop-down-container span.separator{
    border-bottom: 1px solid #d7d7d7;
    margin: 10px -10px;
}

a {
    color: #40c4ff;
}
</style>