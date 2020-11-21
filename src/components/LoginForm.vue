<template>
    <div>
        <p>login</p>
    </div>
</template>

<script>
export default {
name: "LoginForm"
}
</script>

<style scoped>
.login-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#login-container {
    background-image: url(../assets/logo.png);
    background-size: 20% auto;
    background-repeat: no-repeat;
    background-position: 15px 15px;
    min-width: 25%;
    padding: 45px 45px;
    background-color: #ffffff;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    text-align: center;
}

#login-container form div > input {
    padding: 8px 16px;
    margin: 4px 0;
}
</style>