import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data(){
        return{
            title: 'Studying Vue.js plan',
            isDisabledPrev: true,
            isDisabledNext: false,
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
            
                
                this.stagesButtons[this.position].isActive = false;
                this.stagesButtons[this.position].isColored = false;
                this.stagesButtons[this.position-1].isActive = true;
                this.position--;
                if(this.position === 0){
                    this.isDisabledPrev = true;
                }
                else if(this.position<this.stagesButtons.length-1){this.isDisabledNext = false;}
        },
        moveForward(){
            
                 
                 this.position++;
                 if(this.position>0){this.isDisabledPrev = false;}
                 this.stagesButtons[this.position-1].isActive = false;
                 this.stagesButtons[this.position].isActive = true;
                 this.stagesButtons[this.position].isColored = true;
                if(this.position===this.stagesButtons.length-1){
                    this.isDisabledNext = true;
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
                        this.position = index;
                        if(this.position === 0){
                        this.isDisabledPrev = true;
                        }
                        if(this.position<this.stagesButtons.length-1){this.isDisabledNext = false;}
                        }

                }
                break;
                case 1: { 
                    
                    this.isDisabledNext = false;
                    this.isDisabledPrev = false;
                    for (let i = 0; i != this.stagesButtons.length; i++ ){
                        if (i<index){
                            this.stagesButtons[i].isColored=true;
                            this.stagesButtons[i].isActive=false;
                        }
                        else if(i==index){
                            this.stagesButtons[i].isColored=true;
                            this.stagesButtons[i].isActive=true;
                            this.position = index;

                        }
                        else{
                            this.stagesButtons[i].isColored=false; 
                            this.stagesButtons[i].isActive=false;
                        }
                    }

                }
                break;
                case 2: { 

                    this.isDisabledNext = false;
                    this.isDisabledPrev = false;
                    for (let i = 0; i != this.stagesButtons.length; i++ ){
                        if (i<index){
                            this.stagesButtons[i].isColored=true;
                            this.stagesButtons[i].isActive=false;
                        }
                        else if(i==index){
                            this.stagesButtons[i].isColored=true;
                            this.stagesButtons[i].isActive=true;
                            this.position = index;
                        }
                        else{
                            this.stagesButtons[i].isColored=false; 
                            this.stagesButtons[i].isActive=false;
                        }
                    }

                }
                break;
                case 3: { 

                    this.isDisabledNext = false;
                    this.isDisabledPrev = false;
                    for (let i = 0; i != this.stagesButtons.length; i++ ){
                        if (i<index){
                            this.stagesButtons[i].isColored=true;
                            this.stagesButtons[i].isActive=false;
                        }
                        else if(i==index){
                            this.stagesButtons[i].isColored=true;
                            this.stagesButtons[i].isActive=true;
                            this.position =index;
                        }
                        else{
                            this.stagesButtons[i].isColored=false; 
                            this.stagesButtons[i].isActive=false;
                        }
                    }

                }
                break;
                case 4: { 
                        for (let i = 0; i<this.stagesButtons.length; i++){
                            this.stagesButtons[i].isColored=true; 
                            this.stagesButtons[i].isActive=false;
                        }
                        this.stagesButtons[index].isActive = true;
                        
                        this.position = index;
                        if(this.position>0){this.isDisabledPrev = false;}
                        if(this.position===this.stagesButtons.length-1){this.isDisabledNext = true;}
                }
                break;
                
            }

        }
    },
    
}).mount('#app')
    