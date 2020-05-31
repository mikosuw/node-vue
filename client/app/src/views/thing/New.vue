<template>
    <div>
        <h1>New thing</h1>
        <thing-form @createOrUpdate="createOrUpdate"></thing-form>
    </div>
</template>

<script>
    import thingForm from '../../components/ThingForm.vue';
    import {api} from '../../helpers/Helpers';
    export default {
        name: 'new-thing',
        components: {
            'thing-form': thingForm
        },
        methods: {
            createOrUpdate: async function (thing) {
                const res = await api.creatething(thing);
                this.flash('thing created', 'success');
                this.$router.push(`/things/${res._id}`);
            }
        }
    };
</script>
