import Vue from 'vue';

const Toast = Vue.extend({
    template: '<div>{{ message }}</div>',
    data() {
        return {
            message: 'this is a toast'
        };
    },
});

export default Toast;
