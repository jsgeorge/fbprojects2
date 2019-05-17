//import React from "react";

export const getDateString = msec => {
  let curDate = new Date(msec);
  let date = curDate.getDate();
  let mth = curDate.getMonth();
  let yr = curDate.getFullYear();
  let hrs = curDate.getHours();
  let min = curDate.getMinutes();
  let sec = curDate.getSeconds();

  let mthName = "";
  switch (mth + 1) {
    case 1:
      mthName = "Jan";
      break;
    case 2:
      mthName = "Feb";
      break;
    case 3:
      mthName = "Mar";
      break;
    case 4:
      mthName = "Apr";
      break;
    case 5:
      mthName = "May";
      break;
    case 6:
      mthName = "Jun";
      break;
    case 7:
      mthName = "Jul";
      break;
    case 8:
      mthName = "Aug";
      break;
    case 9:
      mthName = "Sep";
      break;
    case 10:
      mthName = "Oct";
      break;
    default:
      mthName = "";
  }
  let DateString =
    mthName + " " + date + ", " + yr + " " + hrs + ":" + min + ":" + sec;
  return DateString;
};

export const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};
export const reverseArray = actualArray => {
  let reversedArray = [];
  for (let i = actualArray.length - 1; i > 0; i--) {
    reversedArray.push(actualArray[i]);
  }
  return reversedArray;
};
