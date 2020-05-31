<template>
    <div>
        <h1>things</h1>
        <table id="things" class="ui celled compact table">
            <thead>
            <tr>
                <th><i class="calendar plus icon"></i>Thing</th>
                <th><i class="info circle icon"></i>Detail</th>
                <th><i class="lock open icon"></i></th>
                <th><i class="edit icon"></i></th>
                <th><i class="trash icon"></i></th>


                <th colspan="3"></th>
            </tr>
            </thead>
            <tr v-for="(thing, i) in things" :key="i">
                <td>{{ thing.name }}</td>
                <td>{{ thing.type }}</td>
                <td width="75" class="center aligned">
                    <router-link :to="{ name: 'things-show', params: { id: thing._id }}">Show</router-link>
                </td>
                <td width="75" class="center aligned">
                    <router-link :to="{ name: 'things-edit', params: { id: thing._id }}">Edit</router-link>
                </td>
                <td width="75" class="center aligned" @click.prevent="onDestroy(thing._id)">
                    <a :href="`/things/${thing._id}`">Delete</a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {api} from '../../helpers/Helpers';

    export default {
        name: 'things',
        data() {
            return {
                things: []
            };
        },
        methods: {
            async onDestroy(id) {
                const sure = window.confirm('Are you sure?');
                if (!sure) return;
                await api.deletething(id);
                this.flash('thing deleted sucessfully!', 'success');
                this.things = this.things.filter(thing => thing._id !== id);
            }
        },
        async mounted() {
            this.things = await api.getthings();
        }
    };
</script>
