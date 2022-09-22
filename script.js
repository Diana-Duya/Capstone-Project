const hamburger = document.querySelector('.humburger');
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
    name: 'Ariel Camus',
    image: 'img/yochai',
    title: 'Founder + CEO, Microverse',
    desc: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye, a travel app with 1MM+ users acquired by Lonely Planet. He is famous for his bad jokes and Argentinian asados.',
  },
  {
    name: 'Juanjo Mata',
    image: 'img/third-pic',
    title: 'COO, Microverse',
    desc: 'Juanjo has spent 25 years writing software and managing teams at Netscape/Mozilla, Oracle, and startups like Teambox and Agroviz. With a passion for open source tech and helping teams make global impact, he spends his time between the San Francisco and Spain trying to catch a live music show with his wife whenever he can.',
  },
  {
    name: 'Amal Bepo',
    image: 'img/sec-pic',
    title: 'Student Success, Microverse',
    desc: 'Amal is a London native but a nomad at heart. Although she has an Arts and Business background, she loves all things people related. In her spare time you will find her travelling and being adventurous.',
  },
  {
    name: 'Andrea Funda',
    image: 'img/third-pic',
    title: 'Student Success, Microverse',
    desc: 'As an avid traveler, Andrea believes no road trip is successful without getting lost at least once. Professionally though, she loves helping people find their way. Her background is in process, project, and people management. Outside of work, she can usually be found playing board games, hiking, or mastering new recipes.',
  },
  {
    name: 'Anne-Lore De Vreese',
    image: 'img/download (1)',
    title: 'Student Success, Microverse',
    desc: 'Anne-Lore is originally from Belgium and has lived in 5 countries in North America, Asia, and Europe. Her background is in tech recruitment and her passion lies in getting more underrepresented communities in the tech world. Outside of work you’ll often find her cooking new dishes or spending time in nature.',
  },
  {
    name: 'Autum Huffman',
    image: 'img/Autum.png',
    title: 'Career Services, Microverse',
    desc: 'Autumn is a reformed academic with a passion for democratizing education and helping students meet their potential. Prior to Microverse, she was a college instructor, education researcher, college & career coach, and helped bootstrap a Florida non-profit education program. In her spare time Autumn loves hiking, amateur photography, and having dance parties with her 4 year old.',
  },
  {
    name: 'Crystal Onyeari Mbanefo',
    image: 'img/Crystal.png',
    title: 'Career Services, Microverse',
    desc: 'Crystal has had an amazing yet challenging journey of transitioning from careers within, and outside of the IT industry. Today, she\'s dedicated to helping others make career transition through her role as a Career Coach at Microverse.',
  },
  {
    name: 'Emilia Andrzejewska',
    image: 'img/Emilia.png',
    title: 'Curriculum & Learning, Microverse',
    desc: 'Emilia is a web developer by profession and a teacher at heart. She has 7 years of professional coding experience, mostly in C# and Ruby, and has served as a mentor on various bootcamps and Rails Girls communities. She has also spearheaded the creation of a community-led bootcamp in Poland. In her free time, Emily enjoys doing yoga and reading books.',
  },
  {
    name: 'Eric Newport',
    image: 'img/Eric.png',
    title: 'Career Services, Microverse',
    desc: 'Eric is a software engineer with a love of teaching. He has more than a decade of professional experience working as a developer at various tech companies and trained to be a teacher in college. Career coaching at Microverse allows him to combine his passion for programming with his passion for pedagogy, to help new developers learn the skills needed to land jobs and be successful in tech.',
  },
  {
    name: 'Gaby Suarez',
    image: 'img/Gaby.png',
    title: 'Admissions, Microverse',
    desc: 'Gaby is a native Salvadoran, Spanglish-speaking, dog (and sushi) lover. Her background is in managerial consulting for large tech companies, but her professional passion lies in helping companies with strong social missions solve complex problems.',
  },
  {
    name: 'Gregory Barrett',
    image: 'img/Gregory.png',
    title: 'Operations, Microverse',
    desc: 'Greg is a lover of travel and has lived in Asia, North America and his native Europe. His background is in technology and education and he is passionate about working remotely. Outside of work, you\'ll find him in a garden center buying more plants for the small jungle he is growing on his balcony.',
  },
  {
    name: 'Israel Gutiérrez',
    image: 'img/Israel.png',
    title: 'Curriculum & Learning, Microverse',
    desc: 'Developing software for a few years, Israel discovered his element: education. He’s been a researcher in Technology Enhanced Learning, curriculum developer, teacher coordinator and education innovator in bootcamps and initiatives to help people land jobs as software developers. After work, he spends time with his kids and his dog, Otto.',
  },
  {
    name: 'Jennifer Best',
    image: 'img/Jennifer.png',
    title: 'Career Services, Microverse',
    desc: 'Jenn is a career coach passionate about helping people change their lives. Her early career includes roles in management, recruiting, and hiring — giving her an extensive understanding of the hiring process and how applicant tracking software (ATS) filters work. She currently resides in the Portland, Oregon metro but calls Baden-Württemberg her true home.',
  },
  {
    name: 'Jette Stubbs',
    image: 'img/Jette.png',
    title: 'Career Services, Microverse',
    desc: 'Jette has spent 10 years working in career services, supporting people in over 40 industries all over the world on their career journeys. Outside of work, you can find her dancing, working on a creative project, or in nature.',
  },
  {
    name: 'Maciej Nowak',
    image: 'img/Maciej.png',
    title: 'SOFTWARE DEVELOPMENT, Microverse',
    desc: 'Maciej is all about solving technical challenges and delivering the best quality software products possible. He has been working in the IT industry since 2012. Personally, he\'s a healthy lifestyle addict with a passion for various kinds of sports.',
  },
  {
    name: 'Maria Santos',
    image: 'img/Maria.png',
    title: 'OPERATIONS, Microverse',
    desc: 'Maria has spent her entire professional career working in education in some form or another, both as a teacher and as a recruiter/sourcing specialist for an award-winning edtech company. She cares deeply about democratizing education, and has more pet rabbits than she has family members. In her free time, she loves baking, taking weird Skillshare courses, and watching terrible B-movies on Netflix.',
  },
  {
    name: 'Meesen Brown',
    image: 'img/Meesen.png',
    title: 'Marketing, Microverse',
    desc: 'Meesen is originally from Canada and has spent her career living and working around the world. She previously founded Behere (acquired), a travel management platform for remote workers, and is passionate about helping shape the future of work. When she\'s not working, find her outdoors, reading, or finding ways to live more sustainably.',
  },
  {
    name: 'Mustapha Yakubu',
    image: 'img/Mustapha.png',
    title: 'Career Services, Microverse',
    desc: 'Mustapha is passionate about helping people land their dream job. Over the years, he has created numerous career training programs to help job seekers achieve their career goals. You can always find him discussing tech, startups or Steve jobs. He enjoys traveling, playing ping-pong and eating pizza.',
  },
  {
    name: 'Nicolas Kneler',
    image: 'img/Nicolas.png',
    title: 'Admissions, Microverse',
    desc: 'Born and raised in Argentina, Nico developed a music collaboration platform right after college and has been designing product strategies for startups ever since. When not working you\'ll find him walking about or looking for original furniture in flea markets.',
  },
  {
    name: 'Riley Spicer',
    image: 'img/Riley.png',
    title: 'Product, Microverse',
    desc: 'Riley cares about creating community and improving the world we live in. They come to Microverse with an eclectic background that includes attending a coding school then working as a software engineer at AWS. When not working on Microverse, they can be found knitting, painting, or writing poetry somewhere around the world.',
  },
  {
    name: 'Sher Tapang',
    image: 'img/Sher.png',
    title: 'Admissions, Microverse',
    desc: 'Sher is passionate about helping others, creating stronger communities and advocating to build a happier society for everyone. When she isn’t working, you’ll find her working out in the gym, watching thriller series on Netflix, or spending quality time with her husband and daughter.',
  },
  {
    name: 'Vero Rebagliatte',
    image: 'img/Vero.png',
    title: 'Engineering, Microverse',
    desc: 'Vero is originally from Uruguay but recently relocated to beautiful Costa Rica. As a person of humble beginnings, she’s passionate about providing folks with access to opportunities to develop themselves and create the life they want to live. When she\'s not working, she enjoys spending time near the ocean, with human, and also four-legged, friends!',
  },
  {
    name: 'Willow Mata',
    image: 'img/Willow.png',
    title: 'Student Success, Microverse',
    desc: 'Willow believes deeply in education and global connections as the route to greater opportunity for all. Her background is in evaluation research, organizational learning, and international education. A native of California, Willow lives with her husband and three bilingual children near Madrid, Spain.',
  },
]

const speakers = document.querySelector('.people')

const speakerList = document.createElement('ul')
speakerList.className = 'speakerlist'
speakers.appendChild(speakerList)

speakerdata.forEach((speaker) => {
  // cards
  const cardWork = document.createElement('li')
  cardWork.className = 'listItem'

 
 

  const speakerImg = document.createElement('div')
  const picha = document.createElement('img')
  picha.src = speaker.image
  speakerImg.className = 'picture'
  speakerImg.appendChild(picha)
  cardWork.appendChild(speakerImg)

  const speakerName = document.createElement('h3')
  speakerName.className = 'name'
  speakerName.innerHTML = speaker.name;
  cardWork.appendChild(speakerName);

  const speakerTitle = document.createElement('p')
  speakerTitle.className = 'title'
  speakerTitle.innerHTML = speaker.title;
  cardWork.appendChild(speakerTitle);

  const speakerDescr = document.createElement('p')
  speakerDescr.className = 'description'
  speakerDescr.innerHTML = speaker.desc;
  cardWork.appendChild(speakerDescr);

   speakerList.appendChild(cardWork);
});


const seeMore = document.createElement('button');
seeMore.className = 'button2';
seeMore.type = 'button';
seeMore.innerHTML = 'See <i class="chevron down icon"></i>';
speakers.appendChild(seeMore);

const speakerItems = Array.from(document.querySelectorAll('listItem'));

speakerItems.forEach((item, index) => {
  if (index > 1) {
    item.classList.add('hide');
  }
});

const otherBtn = document.querySelector('.otherbtn');

const otherBtnTxt = (item) => {
if(item.classList.contains('hide')) {
  otherBtn.innerHTML = 'more <i class = "chevron down icon"></i>';

}else {
  otherBtn.innerHTML = 'more <i class = "chevron up icon"></i>';
}
};

otherBtn.addEventListener('click', () => {
  speakerItems.forEach((item, index) => {
    if (index > 1) {
      item.classList.toggle('hide');
      otherBtnTxt(item);
    }
  });
});