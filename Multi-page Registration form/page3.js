Filevalidation = () => {
    const fi = document.getElementById('photo');
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {
  
            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 4096) {
                alert(
                  "File too Big, please select a file less than 4mb");
            } else if (file < 2048) {
              
            } else {
                document.getElementById('size').innerHTML = '<b>'
                + file + '</b> KB';
            }
        }
    }
}

Filevalidations = () => {
    const fi = document.getElementById('hscMark');
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {
  
            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 4096) {
                alert(
                  "File too Big, please select a file less than 4mb");
           
            } else {
                document.getElementById('size').innerHTML = '<b>'
                + file + '</b> KB';
            }
        }
    }
}



Filevalidate = () => {
    const fi = document.getElementById('sscMark');
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {
  
            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 4096) {
                alert(
                  "File too Big, please select a file less than 4mb");
            
            } else {
                document.getElementById('size').innerHTML = '<b>'
                + file + '</b> KB';
            }
        }
    }
}

   Filevalide = () => {
    const fi = document.getElementById('semestersMark');
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {
  
            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 10096) {
                alert(
                  "File too Big, please select a file less than 10mb");
            } else if (file < 2048) {
                alert(
                  "File too small, please select a file greater than 2mb");
            } else {
                document.getElementById('size').innerHTML = '<b>'
                + file + '</b> KB';
            }
        }
    }
}

let saveFile= () => {
    const photo=document.getElementById("photo");
    const hscMark=document.getElementById("hscMark");
    const sscMark=document.getElementById("sscMark");
    const semestersMark=document.getElementById("semestersMark");
    
    

    let data="\r Recent_Passport_Size_Photograph: "+photo.value +"\r\n" +"HSC_Mark_Sheet: "+hscMark.value +"\r\n"+"SSC_Mark_Sheet: "+sscMark.value+"\r\n"+"All_Semesters_Mark_Sheet_in_Single_PDF_or_Docs: "+semestersMark.value;

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