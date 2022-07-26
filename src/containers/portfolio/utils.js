import ImageOne from '../../images/cryptococktail.jpg'
import ImageTwo from '../../images/promangsyst.jpg'
import ImageThree from '../../images/codeinmind.jpg'

export const portfolioData = [
  {
    sectionId: 2,
    projectName: 'Crypto Cocktails',
    projectLink: 'https://shman-dee.github.io/crypto-cocktails/',
    githubLink: 'https://github.com/Shman-Dee/crypto-cocktails',
    image: ImageOne,
  },
  {
    sectionId: 3,
    projectName: 'Project Management System',
    projectLink: 'https://promanagesysfeb22.herokuapp.com/',
    githubLink: 'https://github.com/Shman-Dee/proManagementSyst',
    image: ImageTwo,
  },
  {
    sectionId: 2,
    projectName: 'Code In Mind',
    projectLink: 'https://codeinmind.herokuapp.com/',
    githubLink: 'https://github.com/Shman-Dee/code_in_mind',
    image: ImageThree,
  },
]

export const filterOptions = [
  {
    label: 'All',
    id: 1,
  },
  {
    label: 'Development',
    id: 2,
  },
  {
    label: 'Design',
    id: 3,
  },
]
