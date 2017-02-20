class Ninja {
  constructor(name) {
    this.name = name;
  }

  announce() {
    console.log(`Ninja ${this.name} is here!`);
  }
}

new Ninja('Leonardo').announce();
