function data(){
var value1 = document.addElementById("value1").addEventLisnter("click,data");
var user = {
    name : "관운사가야복지센터",
    call : "054-931-3000",
    address : "경상북도 성주군 성주읍 경산길 33-1"
};
    let json = localStorage.setItem("user",JSON.stringify(user));
    console.log(json);
};


    
