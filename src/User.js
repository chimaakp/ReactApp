export class User{

    constructor(){
        this.name ='Gest';
        this.id = 1;
        this.dataarray =[];
        this.islogin = false;
    }

    get isLogin(){
        return(this.islogin===true && this.name !=='Guest');
    }

    get Name(){
        return this.name;
    }
    Login(){

    }

}