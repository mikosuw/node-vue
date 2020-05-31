import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
    messageOptions: {
        timeout: 3000,
        pauseOnInteract: true
    }
});

const vm = new Vue();
const tasksBaseURL = 'http://localhost:3000/tasks/';
const thingsBaseURL = 'http://localhost:3000/things/';

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
    });

export const api = {
    gettask: handleError(async id => {
        const res = await axios.get(tasksBaseURL + id);
        return res.data;
    }),
    gettasks: handleError(async () => {
        const res = await axios.get(tasksBaseURL);
        return res.data;
    }),
    deletetask: handleError(async id => {
        const res = await axios.delete(tasksBaseURL + id);
        return res.data;
    }),
    createtask: handleError(async payload => {
        const res = await axios.post(tasksBaseURL, payload);
        return res.data;
    }),
    updatetask: handleError(async payload => {
        const res = await axios.put(tasksBaseURL + payload._id, payload);
        return res.data;
    }),

    getthing: handleError(async id => {
        const res = await axios.get(thingsBaseURL + id);
        return res.data;
    }),
    getthings: handleError(async () => {
        const res = await axios.get(thingsBaseURL);
        return res.data;
    }),
    deletething: handleError(async id => {
        const res = await axios.delete(thingsBaseURL + id);
        return res.data;
    }),
    creatething: handleError(async payload => {
        const res = await axios.post(thingsBaseURL, payload);
        return res.data;
    }),
    updatething: handleError(async payload => {
        const res = await axios.put(thingsBaseURL + payload._id, payload);
        return res.data;
    })
};
