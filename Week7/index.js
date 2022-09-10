//task 1
Vue.component('component1', {
    template: '<div> Global Component Input <input placeholder="Task Name" /></div>',   
});

var component2 = {
    template: '<div>Local Component</div>',
};

var app = new Vue({
    el: '#app',
    data: {
        
    },
    components:{
        component2,
    },
});

//task 2
var component3 = {
    props: ['text'],
    template: '<div>{{ text }}<input placeholder=""/></div>',
    
};


var app1 = new Vue({
    el: '#app1',
    data: {
        
    },
    components:{
        component3,
    },
});

