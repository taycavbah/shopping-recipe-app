export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }

    // another way to do this exact thing above - shortcut ,, see below
    // constructor(public name: string, public amount: number){}
}