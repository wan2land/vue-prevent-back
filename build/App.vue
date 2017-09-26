<template>
    <div>
        <div>
            <h1>Links</h1>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/other">Other</router-link></li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
