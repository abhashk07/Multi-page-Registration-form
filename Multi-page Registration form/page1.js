var patten=/\s/g;
var alert= document.getElementById('alert-caps');
function white(data){
    var isSpace=patten.test(data);
    if(isSpace){
        alert.innerText="Space is not allow";
    }
    else{
        alert.innerText="";
    }
}

function validation(){
    var emailCheck = document.getElementById('email').value;
    var pattern = /^[^]+@[^]+\.[a-z]{2,}$/;
    // var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if(pattern.test(emailCheck)){
        document.getElementById('showMsg').innerHTML = "Valid";

    }
    else{
        document.getElementById('showMsg').innerHTML = "Invalid";
        return false;
    }
}


function validationNumaber(){
    var numberCheck = document.getElementById('number').value;
    var pattern = /^[0-9]{10}$/;

    if(pattern.test(numberCheck)){
        document.getElementById('text').innerHTML = "Valid";

    }
    else{
        document.getElementById('text').innerHTML = "Invalid";
        return false;
    }
}


function validationNumabers(){
    var numbersCheck = document.getElementById('numbers').value;
    var pattern = /^[0-9]{10}$/;

    if(pattern.test(numbersCheck)){
        document.getElementById('texts').innerHTML = "Valid";

    }
    else{
        document.getElementById('texts').innerHTML = "Invalid";
        return false;
    }
}



let saveFile= () => {
    const first_name=document.getElementById("firstName");
    const last_name=document.getElementById("lastName");
    const date_of_birth=document.getElementById("date_fo_birth");
    const email=document.getElementById("email");
    const father_first_name=document.getElementById("fFirstName");
    const father_last_name=document.getElementById("fLastName");
    const mother_first_name=document.getElementById("mFirstName");
    const mother_last_name=document.getElementById("mLastName");
    const gender=document.getElementById("gender");
    const nationality=document.getElementById("it_nationality");
    const address=document.getElementById("add");
    const city=document.getElementById("city");
    const country=document.getElementById("it_country");
    const tphone=document.getElementById("number");
    const mphone=document.getElementById("numbers");

   

    let data="\r First_name: "+first_name.value +"\r\n" +"Last_name: "+last_name.value +"\r\n"+"Date_of_Birth: "+date_of_birth.value+"\r\n"+"Email: "+email.value+"\r\n"+"Father_First_Name: "+father_first_name.value+"\r\n"+"Father_Last_Name: "+father_last_name.value+"\r\n"+"Mother_First_Name: "+mother_first_name.value+"\r\n"+"Mother_Last_Name: "+mother_last_name.value+"\r\n"+"Gender: "+gender.value+"\r\n"+"Nationality: "+nationality.value+"\r\n"+"Address: "+address.value+"\r\n"+"City: "+city.value+"\r\n"+"Country: "+country.value+"\r\n"+"Telephone_Home: "+tphone.value+"\r\n"+"Telephone_Mobile: "+mphone.value;

    //  temp_gender.checked? gender="M" : gender="F";

    console.log(data);

    const textToBLOB=new Blob([data], {type:"text/plain"});
    var filename=new Date();
    var month=new Date();
    month=month.getMonth();

    var day=new Date();
    var day=day.getUTCDate();

    var year=new Date();
    var year=year.getUTCFullYear();

    newdate = year+"/" +month+"/"+day;
    const sFileName=filename;

    let newLink=document.createElement("a");
    newLink.download=new Date();

    if(window.webkitURL !=null){
        newLink.href=window.webkitURL.createObjectURL(textToBLOB);
    }
    else{
        newLink.href=window.URL.createObjectURL(textToBLOB);
        newLink.style.display="none";
        document.body.appendChild(newLink);
    }
    newLink.click();
};
    