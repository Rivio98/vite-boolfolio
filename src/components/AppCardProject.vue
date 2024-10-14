<script>
import axios from 'axios';
export default {
    props: {
        projects: {
            type: Array
        }
    },
    name: 'AppCardProject',
    data() {
        return {

        }
    },
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-4" v-for="project in projects">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{ project.name }}</h5>
                                <p class="card-text">{{ project.description }}</p>
                                <img :src="project.project_image.startsWith('http') ? project.project_image : `http://127.0.0.1:8000/storage/${project.project_image}`"
                                    class="card-img-top" alt="Project img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">

</style>