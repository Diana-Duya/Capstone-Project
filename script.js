const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const speakerdata = [
  {
    name: 'Steffi Lemke',
    image: 'img/csm_Steffi_Lemke_2022__806ab0193b.jpg',
    title: 'Founder + CEO, Siemens AG',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto pariatur officiis quaerat culpa quasi, repellat possimus tempore esse porro suscipit eaque, iste, soluta ad tempora! Reiciendis neque totam cum eius?',
  },
  {
    name: 'Chikwe Ihekweazu',
    image: 'img/csm_Chikwe_Ihekweazu_de034abe95.jpg',
    title: 'VP, Lowe Innovation',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto pariatur officiis quaerat culpa quasi, repellat possimus tempore esse porro suscipit eaque, iste, soluta ad tempora! Reiciendis neque totam cum eius?',
  },
  {
    name: 'Inger Ashing',
    image: 'img/csm_Inger_Ashing_2016_1cd80f299b.jpg',
    title: 'VP, Johnson $ Johnson',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto pariatur officiis quaerat culpa quasi, repellat possimus tempore esse porro suscipit eaque, iste, soluta ad tempora! Reiciendis neque totam cum eius?',
  },
  {
    name: 'Marco Lambertini',
    image: 'img/csm_Marco_Lambertini_6fcef027b6.PNG',
    title: 'VP, Transformation Tech',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto pariatur officiis quaerat culpa quasi, repellat possimus tempore esse porro suscipit eaque, iste, soluta ad tempora! Reiciendis neque totam cum eius?',
  },
  {
    name: 'Nanjira Sambul',
    image: 'img/csm_Nanjira_Sambuli_9b2ce390a2.jpg',
    title: 'Head of AI, Microverse',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto pariatur officiis quaerat culpa quasi, repellat possimus tempore esse porro suscipit eaque, iste, soluta ad tempora! Reiciendis neque totam cum eius?',
  },
  {
    name: 'Christos Christou',
    image: 'img/csm_Christos_Christou_ff5a205480.jpg',
    title: 'CIO, nvidia',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto pariatur officiis quaerat culpa quasi, repellat possimus tempore esse porro suscipit eaque, iste, soluta ad tempora! Reiciendis neque totam cum eius?',
  },
];

const speakers = document.querySelector('.people');

const speakerList = document.createElement('ul');
speakerList.className = 'speakerlist';
speakers.appendChild(speakerList);

speakerdata.forEach((speaker) => {
  // cards
  const cardWork = document.createElement('li');
  cardWork.className = 'listItem';

  const speakerImg = document.createElement('div');
  const picha = document.createElement('img');
  picha.src = speaker.image;
  speakerImg.className = 'picture';
  speakerImg.appendChild(picha);
  cardWork.appendChild(speakerImg);

  const speakerContainer = document.createElement('div');
  speakerContainer.className = 'speaker-container';
  const speakerName = document.createElement('h3');
  speakerName.className = 'name';
  speakerName.innerHTML = speaker.name;
  speakerContainer.appendChild(speakerName);

  const speakerTitle = document.createElement('p');
  speakerTitle.className = 'title';
  speakerTitle.innerHTML = speaker.title;
  speakerContainer.appendChild(speakerTitle);

  const speakerDescr = document.createElement('p');
  speakerDescr.className = 'description';
  speakerDescr.innerHTML = speaker.desc;
  speakerContainer.appendChild(speakerDescr);

  // speakerContainer.appendChild(cardWork);
  cardWork.appendChild(speakerContainer);
  speakerList.appendChild(cardWork);
});