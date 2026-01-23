import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({

    data: () => ({ 
    isSafari: false,
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
            Backspace: 'deleteLast',
            Enter: 'calc',
            '=': 'calc'
            };
                       
            if (e.key === 'Escape') {
                if (!e.metaKey) {
                this.handleInput({ action: 'clearDisplay' })
                } else {
                this.handleInput({ action: 'clearDisplay' })
                }
                e.preventDefault()
                return
            }

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
        },
             
   },
   mounted() {
    window.addEventListener('keydown', this.onKeydown)
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
   },
   beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown)
  },
    

}).mount('#app')

