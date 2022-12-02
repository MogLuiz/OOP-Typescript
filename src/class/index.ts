export class Enterprise {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }
}

export class Collaborator {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const enterprise1 = new Enterprise('Wiser', '11.111.111/0001-11');

const collaborator1 = new Collaborator('Luiz', 'Ramos');
const collaborator2 = new Collaborator('Lucas', 'Souza');
const collaborator3 = new Collaborator('Gislene', 'Souza');

enterprise1.addCollaborator(collaborator1);
enterprise1.addCollaborator(collaborator2);
enterprise1.addCollaborator(collaborator3);

console.log(enterprise1);
