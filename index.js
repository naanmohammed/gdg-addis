const speakers = [
    {
      image: 'img/speaker1.png',
      name: 'Chapi Mengistu',
      title: 'Senior Python Developer.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id est vel est dapibus luctus.'
    },
    {
      image: 'img/speaker2.png',
      name: 'Daniel Negussie',
      title: 'GDG Addis, Lead',
      description: 'Pellentesque eget sem eu odio ultrices sodales. Suspendisse potenti. Proin euismod arcu vitae mi consequat posuere.'
    },
    {
      image: 'img/speaker3.png',
      name: 'Mariamawit Alemu',
      title: 'Women in Tech, Lead',
      description: 'Fusce a neque sapien. Integer ac elit elit. Vestibulum imperdiet tortor ut felis ullamcorper lobortis.'
    },
    {
      image: 'img/speaker4.png',
      name: 'Nabil Mohammed',
      title: 'GDG Addis, Co-founder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id est vel est dapibus luctus.'
    },
    {
      image: 'img/speaker5.png',
      name: 'Daniel Abraham',
      title: 'Qene Games, CTO',
      description: 'Pellentesque eget sem eu odio ultrices sodales. Suspendisse potenti. Proin euismod arcu vitae mi consequat posuere.'
    },
    {
      image: 'img/speaker6.png',
      name: 'Dawit Getachew',
      title: 'Guzo Tech, CEO',
      description: 'Fusce a neque sapien. Integer ac elit elit. Vestibulum imperdiet tortor ut felis ullamcorper lobortis.'
    }
  ];
  
  const featureSpeakers = document.createElement('div');
  featureSpeakers.id = 'feature-speakers';
  const mainSection = document.getElementById("main");
  const partnerSection = document.getElementById("partners");
  partnerSection.parentNode.insertBefore(featureSpeakers, partnerSection);

  const featureSpeakersTitle = document.createElement('h1');
  featureSpeakersTitle.id = 'feature-speakers-title';
  featureSpeakersTitle.textContent = 'Featured Speakers';
  featureSpeakers.appendChild(featureSpeakersTitle);
  
  speakers.forEach(speaker => {

    const featureCardContainer = document.createElement('div');
    featureCardContainer.classList.add('feature-card-container');

    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-card');
  
    const speakerImage = document.createElement('img');
    speakerImage.classList.add('speaker-img');
    speakerImage.src = speaker.image;
    speakerImage.alt = speaker.name;
    

    const speakerDetails = document.createElement('div');
    speakerDetails.classList.add('speaker-details');
    speakerCard.appendChild(speakerDetails);

    const speakerName = document.createElement('h3');
    speakerName.textContent = speaker.name;
    speakerDetails.appendChild(speakerName);
  
    const speakerTitle = document.createElement('p');
    speakerTitle.textContent = speaker.title;
    speakerTitle.classList.add('speaker-title')
    speakerDetails.appendChild(speakerTitle);
  
    const speakerDescription = document.createElement('p');
    speakerDescription.textContent = speaker.description;
    speakerDetails.appendChild(speakerDescription);
  
    featureCardContainer.appendChild(speakerImage);
    featureCardContainer.appendChild(speakerCard);
    featureSpeakers.appendChild(featureCardContainer);
  });


//
const hamburger = document.getElementById("hamburger");
const mobileMenuList = document.getElementById("mobile-menu-list");

hamburger.addEventListener("click", function() {
  mobileMenuList.classList.toggle("d-none");
});

const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const popup = document.getElementById('mobile-menu-list');
    popup.classList.remove('d-block');
    popup.classList.add('d-none');
  });