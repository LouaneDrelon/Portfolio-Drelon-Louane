new Vue({
    el : '#app',
    data : {
        automobile : false ,
        portray : false ,
        animal : false,
    },
    methods : {
        showAutomobile : function(){
            this.automobile = true;
            this.portray = false;
            this.animal = false;

        },
        showPortray : function(){
            this.automobile = false;
            this.portray = true;
            this.animal = false;
        },
        showAnimal : function(){
            this.automobile = false;
            this.portray = false;
            this.animal = true
        }
    }
})