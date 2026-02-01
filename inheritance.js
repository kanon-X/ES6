class parent{
    Assets1(){
        console.log("eta");
    }
    Assets2(){
        console.log("eta2");
    }
}

class Ami extends parent{
    MyAssets(){
        super.Assets1();
        super.Assets2();
    }
}
let MyAssets = new Ami();
MyAssets.Assets1();
MyAssets.Assets2();
