function onClick(){
    let haseeb = $("#email");
    if(haseeb.val() == ''){
        $("#email").addClass("red");
    }
    else{
        $("#email").removeClass("red");
    }
}