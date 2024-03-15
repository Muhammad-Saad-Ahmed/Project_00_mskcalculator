import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstnumber" },
  { message: "Enter Second Number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator of the operator",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
  },
]);

//conditional statment

if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please select Valid operator");
}
