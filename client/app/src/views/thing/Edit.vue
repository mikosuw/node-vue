<template>
    <div>
        <h1>Edit thing</h1>
        <thing-form @createOrUpdate="createOrUpdate" :thing=this.thing></thing-form>
    </div>
</template>

<script>
    import thingForm from '../../components/ThingForm.vue';
    import {api} from '../../helpers/Helpers';
    export default {
        name: 'edit',
        components: {
            'thing-form': thingForm
        },
        data: function () {
            return {
                thing: {}
            };
        },
        methods: {
            createOrUpdate: async function (thing) {
                await api.updatething(thing);
                this.flash('thing updated sucessfully!', 'success');
                this.$router.push(`/things/${thing._id}`);
            }
        },
        async mounted() {
            this.thing = await api.getthing(this.$route.params.id);
        }
    };
</script>
