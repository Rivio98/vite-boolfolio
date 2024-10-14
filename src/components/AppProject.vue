<script>
import AppCardProject from './AppCardProject.vue';
import axios from 'axios';
export default {
    name: 'AppProject',
    components: {
        AppCardProject,
    },
    data() {
        return {
            projects: []
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios
                .get('http://127.0.0.1:8000/api/index')
                .then((results) => {
                    this.projects = results.data;
                    console.log(results)
                })
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-danger">Elenco Progetti:</h1>
                <AppCardProject :projects="projects" />
            </div>
        </div>
    </div>
</template>
<style lang="">

</style>