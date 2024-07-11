const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(array) {
    for(let win of array) {
        if (win.result === "W") {
            return win.year
        }
    }

  };
  superbowlWin(record);
