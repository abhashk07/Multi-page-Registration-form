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

    let saveFile= () => {
        const hscInstitutionName=document.getElementById("hscName");
        const hscBoard=document.getElementById("hscBoard");
        const hscScore=document.getElementById("hscScore");
        const sscInstitutionName=document.getElementById("sscInstitutionName");
        const sscBoard=document.getElementById("sscBoard");
        const sscScore=document.getElementById("sscScore");
        const pursuing=document.getElementById("pursuing");
        const institutionName=document.getElementById("institutionName");
        const percentage=document.getElementById("percentage");
        const backlogs=document.getElementById("backlogs");
        
    
        let data="\r HSC_Institution_Name: "+hscInstitutionName.value +"\r\n" +"HSC_Board: "+hscBoard.value +"\r\n"+"Score_in_ HSC: "+hscScore.value+"\r\n"+"SSC_Institution_Name: "+sscInstitutionName.value+"\r\n"+"SSC_Board: "+sscBoard.value+"\r\n"+"Score_in_SSC: "+sscScore.value+"\r\n"+"Currently_Pursuing: "+pursuing.value+"\r\n"+"Current_Educational_Institution_Name: "+institutionName.value+"\r\n"+"Overall_Percentage: "+percentage.value+"\r\n"+"Current_Backlogs: "+backlogs.value;
    
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