import Vue from 'vue';

const Toast = Vue.extend({
    template: '<div>{{ message }}</div>',
    data() {
        return {
            message: 'this is a toast'
        };
    },
});

function showToast() {
    const component = new Toast().$mount();
    document.body.appendChild(component.$el);
}

export default {
    showToast
};
