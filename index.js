var lst = document.getElementById("mytbl").rows.length;
const fnames=["Rohit", "Virat","Vinay","Rocky","Rishab","Rakshith","Raj","KL"];
const lnames=["Sharma","Kohli","RV","Bhai","Shetty","Shetty","Shetty","Rahul"];
const city=["mumbai","Delhi","Bengaluru","Bengaluru","Mangolore","Mangolore","Mangolore","Tumkuru"]
    let z=0;
function addRowtop(){
    let table = document.getElementById("mytbl");
    let row=table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML="1";
    cell2.innerHTML=fnames[z];
    cell3.innerHTML=lnames[z];
    cell4.innerHTML="Bengaluru";
    cell5.innerHTML="India";
    var num=1;
    for(var i=1;i<=lst;i++){
        var x = document.getElementById("mytbl").rows[i].cells;
            x[0].innerHTML=num;
            num++;
        }
        lst++;
        z++;

}

function addRowBtm(){
    let table = document.getElementById("mytbl");
    let row=table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML= lst;
    cell2.innerHTML=fnames[z];
    cell3.innerHTML=lnames[z];
    cell4.innerHTML="Mumbai";
    cell5.innerHTML="India";
    lst++;
    z++;
    
}
        
