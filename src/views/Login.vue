<template>
    <div class="login">
        <h1>Login</h1>
        <input 
            type="text" 
            placeholder="Email"
            v-model="email"
        >
        <br>
        <input 
            type="password" 
            placeholder="Senha"
            v-model="senha"
        >
        <br>
        <div class ="btn-login">
            <button @click="login">Login</button>
        </div>    
        <p>
            Você não tem conta?
            <span>
                <router-link to="/registrar">crie uma conta</router-link>
            </span>
        </p>
    </div>        
</template>

<script>
export default {
    name:"login",
    data(){
        return{
            email:'',
            senha:''
        };
    },
    methods:{
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
                (user) => {
                    this.$router.replace('home')
                    alert('Bem vindo, ${{email}}')
                },
                (err) => {
                    alert('Não foi possivel realizar o login.' + err.message)
                }
            );
        }
    }
}
</script>
