<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="calendar plus icon"></i>Name
            </div>
            <input type="text" placeholder="Enter name" v-model="thing.name"/>
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="info circle icon"></i> Details
            </div>
            <input type="text" placeholder="Enter type" v-model="thing.type"/>
        </div>


        <button class="positive ui button">Submit</button>
    </form>
</template>

<script>
    export default {
        name: 'thing-form',
        props: {
            thing: {
                type: Object,
                required: false,
                default: () => {
                    return {
                        name: '',
                        type: ''
                    };
                }
            }
        },
        data() {
            return {
                errorsPresent: false
            };
        },
        methods: {
            onSubmit: function () {
                if (this.thing.name === '' || this.thing.name === '') {
                    this.errorsPresent = true;
                } else {
                    this.$emit('createOrUpdate', this.thing);
                }
            }
        }
    };
</script>

<style scoped>
    .error {
        color: red;
    }
</style>
