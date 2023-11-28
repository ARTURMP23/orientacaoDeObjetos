class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    fazerBarulho() {
      console.log(`${this.nome} faz algum barulho.`);
    }
  
    dormir() {
      console.log(`${this.nome} está dormindo.`);
    }
  }
  

  class Cachorro extends Animal {
    constructor(nome, idade, raca) {
      super(nome, idade);
      this.raca = raca;
    }
  
    latir() {
      console.log(`${this.nome} (${this.raca}) está latindo.`);
    }
  }
  
  class Gato extends Animal {
    constructor(nome, idade, cor) {
      super(nome, idade);
      this.cor = cor;
    }
  
    miar() {
      console.log(`${this.nome} (${this.cor}) está miando.`);
    }
  }
  

  const cachorro1 = new Cachorro('Rex', 3, 'Labrador');
  const gato1 = new Gato('Miau', 2, 'Branco');
  const cachorro2 = new Cachorro('Thor', 5, 'Vira-lata');
  

  cachorro1.fazerBarulho();
  gato1.miar();
  cachorro2.latir();
  