class Profile{
    constructor(name){
        this._name=name;
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length < 3){
            console.log(`This ${value} is too short`)
        }else{
            this._name=value;
        }
    }
}

let me= new Profile("Shami");
console.log(me.name);