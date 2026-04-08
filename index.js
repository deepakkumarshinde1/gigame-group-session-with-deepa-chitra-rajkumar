let text = "Hello, World!";
console.log(text);

function greet(name) {
  return `Hello, ${name}!`;
}

class Human {
  constructor(name) {
    this.name = name;
  }
  running() {
    console.log(this.name, " is running...");
  }
}

const human = new Human("Kumar");
human.running();
