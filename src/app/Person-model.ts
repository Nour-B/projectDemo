

export class Person{
    id=0;
    firstName='';
    lastName='';
    birth_date='';
    addresses : Address[];
    email='';
   phone='';





}


export class  Address{
    street = '';
    city= '';
    state ='';
    zip = '';

}





export const sexe = ['Masculin','Féminin'];

export const pays =['Afrique du Sud','Algérie','Allemagne','Amérique du sud','Arménie','Australie','Autriche'
    ,'Bélgique','Bénin','Birmanie','Bolivie','Brésil','Bulgarie','Burkina Faso',
    'Cambodge','Cameroun','Canada','Chine','Colombie','Cote divoire','Croatie','Cuba','Danemark',
    'Espagne','Ethiopie' ,'Finlande','France','Gabon','Grande Bretagne','Gréce',
    'Guadeloupe','Guagane','Hongrie','Inde','Indonésie','Irlande','Islande',
    'Italie','Japon','Laos','Liban','Lituanie','Luxembourg','Madagacar','Mali','Maroc',
    'Martinique','Maurie(IIE Maurice)','Magotte','Mexique','Monaco','NILLE CALEDONIE','Norvége',
    'Nouvelle Zélande','Pays Bas','Pérou','Pologne','Portugal','Puerto Rico','QATAR',
    'République Tchéque','Réunion','Roumanie','Russie','Rwanda','San SAlvador','Sénégal',
    'Solvénique','Srilanka','Suéde','Suisse','Taiwan','Thailande','Togo','Tunisie',
    'Turquie','USA','Ukraine','Vénézuéla','Vietnam','Wallis'
    ];

export const qualites=['Actif(ve)','Appliqué(e)','Autonome',
    'Calme','Communicatif(ve)','Convaincante',
    'Créatif(ve)','Curieux(se)','Débrouillard(e)',
    'Décidé(e)','Energique','inventif(ve)',
    'Minutieux(se)','Observateur(trice)',
    'Organisé(e)','Patient(e)','Persuasif(ve)','Pratique',
    'Réfléchi(e)','Rigoureux(se)',
    'spontané(e)','Autre'];


export const stage=['summer internship','Apprenticeship contract','professional contract','permanent contract'
,'Fixed-term contract']
