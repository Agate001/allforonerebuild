const baseUrl = "https://allforonecl-ffe6dbf2d7eaasdp.westus3-01.azurewebsites.net";

export async function addTwoNumbers(num1, num2) {
  const response = await fetch(`${baseUrl}/api/AddTwoNumbers/get/${num1}/${num2}`);
  return await response.text();
}

export async function askQuestion(question1, question2) {
  const response = await fetch(`${baseUrl}/api/AskingQuestion/get/${question1}/${question2}`);
  return await response.text();
}

export async function greaterLess(number1, number2) {
  const response = await fetch(`${baseUrl}/api/GreaterThanLessThan/compare/${number1}/${number2}`);
  return await response.text();
}

export async function madLib(name, adjective, noun, verb) {
  const response = await fetch(`${baseUrl}/MadLib/get/${name}/${adjective}/${noun}/${verb}`);
  return await response.text();
}

export async function magic8Ball(question) {
  const response = await fetch(`${baseUrl}/api/Magic8Ball/get/${question}`);
  return await response.text();
}

export async function evenOrOdd(number) {
  const response = await fetch(`${baseUrl}/api/EvenOrOdd/get/${number}`);
  return await response.text();
}

export async function restaurantPick(category) {
  const response = await fetch(`${baseUrl}/api/RestrauntPick/get/${category}`);
  return await response.text();
}

export async function reverseNumber(number) {
  const response = await fetch(`${baseUrl}/api/ReverseItString/get/${number}`);
  return await response.text();
}

export async function reverseWord(word) {
  const response = await fetch(`${baseUrl}/api/ReverseItString/get/${word}`);
  return await response.text();
}

export async function sayHello(name) {
  const response = await fetch(`${baseUrl}/HelloWorld/get/${name}`);
  return await response.text();
}