import cookieUserID from "./cookiecutter.js";
import generateTable from "./tableGenerator.js"

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    Amount: e.target[0].value,
    StartDate: e.target[1].value,
    ReachDate: e.target[2].value,
    Name: e.target[3].value,
    UserID: cookieUserID,
  };

  fetch("https://localhost:44357/api/SavingGoal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
};

const getSavingData = () => {
  fetch("https://localhost:44357/api/savinggoal/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
     
      data.forEach(function (obj) {
        //för att räkna ut dagar/månader -------------------------------------------------------------------------
        var msSpan =
          new Date(obj.ReachDate) - new Date(obj.StartDate);
        var daySpan = msSpan / (1000 * 60 * 60 * 24); //(ms * minut * h * dag)
        console.log(msSpan, "ms");
        console.log(daySpan, "dagar");
        var saveEveryDay = obj.Amount / daySpan;
        var saveEveryMonth = obj.Amount / (daySpan / 30);
        if (daySpan <= 31) {
          saveEveryMonth = "";
        } else {
          saveEveryMonth = saveEveryMonth.toFixed(2);
        }

        console.log(saveEveryMonth, "/månad");
        console.log(saveEveryDay, "/dag");
        //räknar till hit ------------------------------------------------------------------------------------------
obj["Save every day"] = saveEveryDay.toFixed(2)
obj["Save every month"] = saveEveryMonth
      });
generateTable(data)
    });
};
getSavingData()
