class Bank  {
    constructor(acNumber,balance,cusName,email,phone){
        this.acNumber = acNumber;
        this.balance = balance;
        this.cusName = cusName;
        this.email = email;
        this.phone = phone
    }
    get accountNumber(){
        return this.acNumber
    }
    set accountNumber(number){
        this.acNumber = number;
    }
    get bal(){
        return this.balance;
    }
    set bal(numb){
        this.balance = numb;
    }
    get customerName(){
        return this.customerName
    }
    set customerName(name){
        this.cusName = name;
    }
    get mail(){
        return this.email;
    }
    set mail(number){
        this.email = number;
    }
    get phoneNumber(){
        return this.phone
    }
    set phoneNumber(number){
        this.phone = number;
    }
    getFullName(){
        return `My name is ${this.cusName}`;
    }
    depositFund(amout){
        this.balance += amout
    }
    withDraw(amount){
        if(this.balance < 0){
            console.log("insuffcient fund")
        }
        else{
        this.balance -= amount;
    console.log(`available balance = ${this.balance}`)}
    }
}

console.log("this is" + val)
let customer1 = new Bank(23, 4,"Eric", "me@gmail.com","0270091294");

console.log(customer1.withDraw(20.0))
console.log(customer1.acNumber)
console.log(customer1.cusName)
console.log(customer1.getFullName())
console.log(customer1.withDraw(2))
console.log(customer1.bal)
console.log(customer1.email)
customer1.phoneNumber = "33000"
console.log(customer1.phone)

/*constructor(acNumber,balance,cusName,email,phone){
    this.acNumber = acNumber;
    this.balance = balance;
    this.cusName = cusName;
    this.email = email;
    this.phone = phone*/