function addRowBtm(){
    let table = document.getElementById("mytbl");
    let row=table.insertRow(6);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML="6";
    cell2.innerHTML="Rohit";
    cell3.innerHTML="Sharma";
    cell4.innerHTML="Mumbai";
    cell5.innerHTML="India";
    const button = document.querySelector('button')
    button.disabled=true;
    const button1 = document.getElementById("btn2");
    button1.disabled=true;
    document.querySelector("h2").innerHTML="Refresh and click on 'ADD ROW TO TOP' to add new row to the top";
}
function addRowtop(){
    let table = document.getElementById("mytbl");
    let row=table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML="1";
    cell2.innerHTML="Kl";
    cell3.innerHTML="Rahul";
    cell4.innerHTML="Bengaluru";
    cell5.innerHTML="India";
    var num=2;
    for(var i=1;i<6;i++){
        var x = document.getElementById(i);
            x.innerHTML=num;
            num++;
        }
        const button = document.querySelector('button')
        button.disabled=true;
        const button1 = document.getElementById("btn2");
        button1.disabled=true;
        document.querySelector("h2").innerHTML="Refresh and click on 'ADD ROW TO BOTTOM' to add new row to the bottom";            

}
        