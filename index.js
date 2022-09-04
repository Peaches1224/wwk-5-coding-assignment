/*1.	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
a.	Use at least one array.
b.	Use at least two classes.
c.	Your menu should have the options to create, view, and delete elements.
*/


class Stylist {
    constructor(name,jobtitle) {
        this.name = name;
        this.jobtitle = jobtitle;
    }
    discribe() {
    return `${this.name} posistions ${this.jobtitle}.`;
}
}
 
let objectTest = [{
    userName: `Peaches`,
    job: `Cosmetologist`
    },
    {
    userName: `Felicia`,
    job: `Esthetician`
    }]

 console.log(objectTest);

class Educator{  
constructor(name){    
this.name = name;
this.educator [name];  

}


addStylist(Stylist) {
    if(Stylist instanceof Stylist){
        this.Stylist.push(Stylist);
    
} 
 else {
    throw new Error(`You can only add instance of Stylist.Argument is not a stylist: ${player}`)
}

describe() 
    return `${this.name} has ${this.stylist.length} stylist.`; 
}


}


class Menu{   // this is the menu itself and what drives the choices 
    constructor() {
        this.services = []; 
        this.selected = null; 
    }
 
    start() { 
        let selection = this.showMenuOptions()
       while (selection != 0); { 
        switch(selection){
            case `1`:    
                this.createName();
                break;
            case `2`:
                this.viewAll();
                break;
            case`3`: 
                this.deleteName();
                break;
            default:
                selection = 0;

        }
        selection = this.showMenuOptions();
    }
    alert(`Goodbye!`);
    }



    showMenuOptions() {
        return  prompt (`
            0) exit
            1) create new stylist
            2) display all stylist
            3) delete stylist
    
        `) 
    } 
    
    createName() {
        let name = prompt(`Enter name for Stylist:`);
        let jobtitle= prompt(`Enter stylist job titile:`);
        this.services.push(new Stylist(name, jobtitle)); 

    }

    viewAll() {
        let output = ``;
        for( let i = 0; i < this.services.length; i++) { 
            let sname = this.services[i].name;
            let job = this.services[i].jobtitle;
            output += i + ` )  ` + sname + ` -  ` + job + '\n '
        }

        alert (output); 
    }


} 


let menu = new Menu();
menu.start(); 



 




