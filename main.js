import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({

    data: () => ({ 
    
    displayValue: '',

    buttons: [
        { label: 'C', action: 'clearDisplay' },
        { label: '/', value: '/' },
        { label: '*', value: '*' },
        { label: 'DEL', action: 'deleteLast' },

        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '-', value: '-' },

        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '+', value: '+' },

        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '=', action: 'calc' },

        { label: '0', value: '0' },
        { label: '.', value: '.' }
],
    regex: /^[0-9+\-*/. ]+$/,
   
    }),
    methods:{
       
        handleInput({ value, action }) {
            
            if (value !== undefined) {
                this.appendValue(value)
            return
            }
       
            if (action && typeof this[action] === 'function') {
                this[action]()
            }
            },

        onKeydown(e) {
           
            if(/[0-9+\-*/.]/.test(e.key)){
            this.handleInput({value: e.key})
            return;
            }

            
            const keyActions = {
            Escape: 'clearDisplay',
            Backspace: 'deleteLast',
            Enter: 'calc',
            '=': 'calc'
            };

            if (keyActions[e.key]) {
            this.handleInput({ action: keyActions[e.key] });
            }

        },

        appendValue(value){
        
            const last = this.displayValue.slice(-1);
            if (/[+\-*/]/.test(last) && /[+\-*/]/.test(value)) return; 

            this.displayValue += value;

        },
   

        deleteLast () {
            this.displayValue = this.displayValue.slice(0, -1);
        },

        clearDisplay(){
            this.displayValue = '';
        },

        calc() {
            if (!this.regex.test(this.displayValue)) return

            try {
            const result = math.evaluate(this.displayValue)

            if (!isFinite(result)) {
             throw new Error("Don't try to divide by zero")
             }

             this.displayValue = String(result)
            } catch (e) {
            this.displayValue = '0'
            console.error(e)
            }
}
   },
   mounted() {
    window.addEventListener('keydown', this.onKeydown)
   },
   beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown)
  },
    

}).mount('#app')

createApp({
    data(){
        return{
            title: 'Studying Vue.js plan',
            position: 0,
            stagesButtons: [
                {label: '1', dedication: 'Basics', description: 'basics description', isActive: true, isColored: true},
                {label: '2', dedication: 'Components', description: 'Components description', isActive: false, isColored: false},
                {label: '3', dedication: 'Router', description: 'router description', isActive: false, isColored: false},
                {label: '4', dedication: 'Vuex', description: 'Vuex description', isActive: false, isColored: false},
                {label: '5', dedication: 'Composition', description: 'Composition description', isActive: false, isColored: false},
            ],
        }
    },
    // template: `
        
    // `,
    methods: {
        moveBack(){
            if(this.position === 0) return;
            else{
                this.stagesButtons[this.position].isActive = false;
                this.stagesButtons[this.position].isColored = false;
                this.stagesButtons[this.position-1].isActive = true;
                this.position--;
            }
        },
        moveForward(){
            if(this.position===this.stagesButtons.length-1) return; 
            else{
                 this.position++;
                 this.stagesButtons[this.position-1].isActive = false;
                 this.stagesButtons[this.position].isActive = true;
                 this.stagesButtons[this.position].isColored = true;
                  
            }
        },
        onStageHandler(index){
           
            switch (index) {
                case 0: { 
                    
                    if(!this.stagesButtons[index+1].isColored){return}
                    else{
                        for (let i = this.stagesButtons.length; i>1; i--){
                            this.stagesButtons[i-1].isColored=false; 
                            this.stagesButtons[i-1].isActive=false;
                        }
                        this.stagesButtons[index].isActive = true;
                        this.position = 0;
                    }

                }
                break;
                case 1: { console.log(index);}
                break;
                case 2: { console.log(index);}
                break;
                case 3: { console.log(index);}
                break;
                case 4: { 
                        for (let i = 0; i<this.stagesButtons.length; i++){
                            this.stagesButtons[i].isColored=true; 
                            this.stagesButtons[i].isActive=false;
                        }
                        this.stagesButtons[index].isActive = true;
                        this.position = 4;
                }
                break;
                
            }

        }
    },
    
}).mount('#practiceapp')
    