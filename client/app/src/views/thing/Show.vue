<template>
    <div>
        <h1>Show thing</h1>


        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="things icon"></i> Thing
            </div>
            <input type="text" readonly :value="thing.name"/>
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="info circle icon"></i> Details
            </div>
            <input type="text" readonly :value="thing.type"/>
        </div>
        <div class="actions">
            <router-link :to="{ name: 'things-edit', params: { id: this.$route.params.id }}">
                Edit thing
            </router-link>
        </div>
    </div>
</template>

<script>
    import {api} from '../../helpers/Helpers';

    export default {
        name: 'show',
        data() {
            return {
                thing: ''
            };
        },
        async mounted() {
            this.thing = await api.getthing(this.$route.params.id);
        }
    };
</script>

<style scoped>
    .actions a {
        display: block;
        text-decoration: underline;
        margin: 20px 10px;
    }
</style>
