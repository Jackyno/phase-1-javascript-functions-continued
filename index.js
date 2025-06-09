// function declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// function expression
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// function returning a function (function closure)
function wrapAdjective(symbol = "*") {
  return function(adjective = "special") {
    return `You are ${symbol}${adjective}${symbol}!`;
  };
}

