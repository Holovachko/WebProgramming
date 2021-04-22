function tableCreator(n , m){
   
  let body = document.getElementsByTagName("body")[0]

  
  let tbl = document.createElement("table")
  let tblBody = document.createElement("tbody")


  for (let j = 0; j <= m; j++) {
    let row = document.createElement("tr")

    for (let i = 0; i < n; i++) {
      let cell = document.createElement("td")
      let cellText = document.createTextNode("cell is row " + j + ", column " + i)

      cell.appendChild(cellText)
      row.appendChild(cell)
    }
    tblBody.appendChild(row)
  }


  tbl.appendChild(tblBody)
  body.appendChild(tbl)
  tbl.setAttribute("border", "2")
}
