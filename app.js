const data = require("./1-input.json");

//let date1 = new Date(data.expenseData[1].startDate);


for (
  let i = 0;
  i < data["expenseData"].length || i < data["revenueData"].length;
  i++
) {

    let examount=0;
    if (i < data["expenseData"].length){
      for (let j = 0; j < data["expenseData"].length; j++) {
        let date = new Date(data.expenseData[i].startDate);
        let month = date.getUTCMonth() + 1;

        date = new Date(data.expenseData[j].startDate);
        let month1 = date.getUTCMonth() + 1;

        if (month1 === month) {
          examount += data.expenseData[i].amount;
        }
      }
     // console.log('expense'+examount);
    }

    let reamount = 0;
    if (i < data["revenueData"].length) {
      for (let j = 0; j < data["revenueData"].length; j++) {
        let date = new Date(data.revenueData[i].startDate);
        let month = date.getUTCMonth() + 1;

        date = new Date(data.revenueData[j].startDate);
        let month1 = date.getUTCMonth() + 1;

        if (month1 === month) {
          reamount += data.revenueData[j].amount;
        }
      }
     // console.log("revenue"+reamount);
    }
  
  let balance = reamount- examount;
  console.log("balance"+balance);
}