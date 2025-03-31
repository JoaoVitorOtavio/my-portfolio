interface ITechs {
  name: string;
  icon: string;
}

export interface IWorkExperience {
  enterpriseName: string;
  role: string;
  time: string;
  description: string;
  detailedDescription: string;
  imagePath: string;
  isTheFirst?: boolean;
  techs?: ITechs[];
  link: string;
}
