<style>
    .hidden-sm-down {
        display: block;
    }
    .hidden-md-up {
        display: none;
    }
    @media (max-width: 767px) {
        .hidden-sm-down {
            display: none;
        }
        .hidden-md-up {
            display: block;
        }
    }
    .highlight {
        padding: 1rem;
        margin: 1rem 0;
        background-color: #f7f7f9;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }
</style>
<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-12 col-md-3 py-md-3">
                <nav class="list-group">
                    <router-link class="list-group-item list-group-item-action p-2" to="/">Home</router-link>
                </nav>
                    
                <h5 class="mt-4">Examples</h5>
                <nav class="list-group">
                    <router-link class="list-group-item list-group-item-action p-2" to="/simple">Simple Example</router-link>
                    <router-link class="list-group-item list-group-item-action p-2" to="/custom-message">Custom Message</router-link>
                    <router-link class="list-group-item list-group-item-action p-2" to="/using-tester">Using Tester</router-link>
                    <router-link class="list-group-item list-group-item-action p-2" to="/using-tester-only">Using Tester Only</router-link>
                </nav>

                <h5 class="mt-4">Modifiers</h5>
                <nav class="list-group">
                    <router-link class="list-group-item list-group-item-action p-2" to="/vue-router-disable">vue-router-disable</router-link>
                    <router-link class="list-group-item list-group-item-action p-2" to="/beforeunload-disable">beforeunload-disable</router-link>
                </nav>
            </div>
            <div class="col-12 col-md-9 py-md-3 pl-md-5">
                <h5>Vue Router</h5>
                <div>
                    <button type="button" class="btn btn-outline-primary m-1" @click="$router.back()">$router.back()</button>
                    <button type="button" class="btn btn-outline-primary m-1" @click="$router.forward()">$router.forward()</button>
                    <button type="button" class="btn btn-outline-primary m-1" @click="$router.replace('/')">$router.replace('/')</button>
                    <button type="button" class="btn btn-outline-primary m-1" @click="$router.push('/')">$router.push('/')</button>
                </div>
                <h5 class="mt-3">Native Javascript</h5>
                <div>
                    <button type="button" class="btn btn-outline-primary m-1" @click="historyBack">history.back()</button>
                    <button type="button" class="btn btn-outline-primary m-1" @click="historyForward">history.forward()</button>
                    <button type="button" class="btn btn-outline-primary m-1" @click="locationReload">location.reload()</button>
                    <button type="button" class="btn btn-outline-primary m-1" @click="historyGo">history.go('/')</button>
                </div>
                <div class="mt-4">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            historyBack() {
                history.back();
            },
            historyForward() {
                history.forward();
            },
            locationReload() {
                location.reload();
            },
            historyGo() {
                history.go('/');
            },
        },
    };
</script>