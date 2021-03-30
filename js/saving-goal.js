import cookieUserID from "./cookiecutter.js";
import generateTableWithBtn from "./tableGeneratorWithBtn.js";
import { getDataByName } from "./fetches.js";

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

getDataByName("savinggoal").then((data) => {
      data.forEach(function (obj) {
        //calculating days/months to save -------------------------------------------------------------------------
        var msSpan = new Date(obj.ReachDate) - new Date(obj.StartDate);
        var daySpan = msSpan / (1000 * 60 * 60 * 24); //(1000ms * 60minut * 60h * 24dag)
        var saveEveryDay = obj.Amount / daySpan;
        var saveEveryMonth = obj.Amount / (daySpan / 30);
        if (daySpan <= 31) {
          saveEveryMonth = "";
        } else {
          saveEveryMonth = saveEveryMonth.toFixed(2);
        }
        //counting to here ------------------------------------------------------------------------------------------
        //Formatting date
        obj.StartDate = obj.StartDate.slice(0, 10);
        obj.ReachDate = obj.ReachDate.slice(0, 10);
        //Renaming obj key
        obj["Start Date"] = obj["StartDate"];
        obj["Reach Date"] = obj["StartDate"];
        delete obj["StartDate"];
        delete obj["ReachDate"];
        //adding new obj key and value to object
        obj["Save every day"] = saveEveryDay.toFixed(2);
        obj["Save every month"] = saveEveryMonth;
      });
  generateTableWithBtn(data, "table-div");
    })
