export class Enterprise {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const enterprise1 = new Enterprise('Wiser');
console.log(enterprise1.name);
