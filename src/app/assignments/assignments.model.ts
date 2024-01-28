export class Assignment {
    _id?:string;
    id!:number;
    nom!:string;
    auteur!:string;
    imageAuteur!:string;
    matiere!:string;
    imageMatiere!:string;
    note!:number;
    remarques!:string;
    dateDeRendu!:Date;
    rendu!:boolean;

    constructor(
        id: number,
        nom: string,
        auteur: string,
        dateDeRendu: Date,
        rendu: boolean,
        matiere: string
      ) {
        this.id = id;
        this.nom = nom;
        this.auteur = auteur;
        this.dateDeRendu = dateDeRendu;
        this.rendu = rendu;
        this.matiere = matiere;
      }
}