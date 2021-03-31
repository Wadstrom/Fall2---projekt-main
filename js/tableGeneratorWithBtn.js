//-----------------------------------------
const generateTableWithBtn = (data, tableDiv) => {
    console.log("data: ");
    console.log(data);
    // get the reference for the body
    var tableDiv = document.getElementById(tableDiv);
    // create table and table body
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //Declare the object keys from data - "[0]" because we know the obj keys won't change
    //objKey is gonna be the table headers
    data.unshift(data[0]);
    var objKey = Object.keys(data[0]);
    console.log("objKey: ");
    console.log(objKey);
    //copying and adding the first data object to beginning

    // ROWS (one row = r) creating a row until data.length is reached
    for (var r = 0; r < data.length; r++) {
        var row = document.createElement("tr");
        //Declare the obj value from data
        var objValue = Object.values(data[r]);

        
        // objValue.push("")
        console.log("objValue:");
        console.log("data: " + objValue);
        

        //COLUMNS (one column = c) creating a column until objKey.length is reached (still in the row-forloop)
        for (var c = 0; c < objKey.length +2; c++) {
            //if row === 0 then write out th
            if (r === 0) {

                var th = document.createElement("th");
                var headerText = document.createTextNode(objKey[c]);
                if (c === objKey.length || c === objKey.length +1) {
                    
                    headerText = document.createTextNode("")

                }
                if(objKey[c] === "ID"){
                    
                    var idLength = objKey[c].length
                    console.log("ID" + idLength);
                }
                console.log(headerText);
                th.appendChild(headerText)
                row.appendChild(th);
                //else write out all td

                
            } 
            else if(c === objKey.length){

                var td2 = document.createElement("td");
                var a = document.createElement('p');
                var btnName = document.createTextNode("🗑");
                a.className = "deleteButton"
                a.appendChild(btnName)
                td2.appendChild(a)
                row.appendChild(td2)
 
            } 
            else if(c === objKey.length  + 1){
                var td2 = document.createElement("td");
                var a = document.createElement('p');
                var btnName = document.createTextNode("✎");
                a.className = "editButton"
                a.appendChild(btnName)
                td2.appendChild(a)
                row.appendChild(td2)
            }
            else {
                var td = document.createElement("td");
                var cellText = document.createTextNode(objValue[c]);
                td.appendChild(cellText);
                row.appendChild(td);
                
            }
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    } //end for row-forloop

    // append tbody in the table
    tbl.appendChild(tblBody);
    // append table into our table-div
    tableDiv.appendChild(tbl);
};


const onDelete = (id) =>{
    var row = document.getElementById(id)
    row.parentNode.removeChild(row)
}


export default generateTableWithBtn;
