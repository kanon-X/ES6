const obj = {
    name : "kanon",
    age  : 22,
    address : {
        city : "Dhaka",
        country : "Bangladesh"
    }
}
const {name,age,address:{city}} = obj;
console.log(name);
