export class Enterprise {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}

export class Collaborator {}

const enterprise1 = new Enterprise('Wiser', '11.111.111/0001-11');
console.log(enterprise1);
