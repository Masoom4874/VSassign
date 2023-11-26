function toggleNavbar() {
  var navbar = document.getElementById("Navbar");
  navbar.classList.toggle("show");
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  var navbar = document.getElementById("Navbar");

  if (section && navbar) {
    var offset = navbar.offsetHeight;
    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth",
    });

    navbar.classList.remove("show");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("close-btn").addEventListener("click", function () {
    // Navigate to the home section
    window.location.href = "#home";
  });
});

// Script for campaign page--------
// -------------------------------
// -------------------------------
var myElement = document.getElementById("campaign-2"),
  imgList = [
    { src: "assets/Ideas/IdeasImg1.png", title: "Gamifications" },
    { src: "assets/Ideas/IdeasImg2.png", title: "Quiz" },
    { src: "assets/Ideas/IdeasImg3.png", title: "Photo Activity(Pictivatr)" },
    { src: "assets/Ideas/IdeasImg4.png", title: "Educational Training" },
    { src: "assets/Ideas/IdeasImg5.png", title: "Pledge" },
    { src: "assets/Ideas/IdeasImg6.png", title: "Survey" },
    { src: "assets/Ideas/IdeasImg7.png", title: "Video based Quiz" },
  ];

function changeImage(myElement, imgList) {
  setInterval(function () {
    var randomImage = Math.floor(Math.random() * imgList.length);
    document.getElementById("campaign-image").src = imgList[randomImage].src;
    document.getElementById("image-title").textContent =
      imgList[randomImage].title;
  }, 1000);
}

changeImage(myElement, imgList);

function redirectToCampaignIdea() {
  const currentHost = window.location.host;

  window.open("campaignIdeas.html", "_self");
}

const capaginOptions = document.getElementById("leftContent");
const rightContainer = document.getElementById("rightContainer");

const campaignRegistrationList = [
  {
    title: "Select campaign types",
    icon: "./assets/camp1.png",

    contentList: [
      {
        image: "./assets/campainType/flat-woman.svg",
        title: "Pictivatr",
      },
      {
        image: "./assets/campainType/pledge.png",
        title: "Pledge",
      },
      {
        image: "./assets/campainType/survey.png",
        title: "Survey",
      },
      {
        image: "./assets/campainType/quiz.png",
        title: "Quiz",
      },
      {
        image: "./assets/campainType/quiz2.svg",
        title: "Video based Quiz",
      },
      {
        image: "./assets/campainType/gamification.png",
        title: "Gamification",
      },
      {
        image: "./assets/campainType/educational.svg",
        title: "Educational Idea",
      },
    ],
  },

  {
    title: "Select data fields to be collected",
    icon: "./assets/camp2.png",
    contentList: [
      {
        image: "./assets/campainDataFieldType/impression.svg",
        title: "Impression",
      },

      {
        image: "./assets/campainDataFieldType/engement.svg",
        title: "Engagement",
      },
      {
        image: "./assets/campainDataFieldType/socialmedia.svg",
        title: "Social Media Followers",
      },

      {
        image: "./assets/campainDataFieldType/leads.svg",
        title: "Leads and Sales",
      },

      {
        image: "./assets/campainDataFieldType/brandawareness.svg",
        title: "Brand Awarness",
      },
      {
        image: "./assets/campainDataFieldType/anaytics.svg",
        title: "Analytics + Leaderboard",
      },
    ],
  },

  {
    title: "Select Duration of campaign",
    icon: "./assets/duration.png",
  },

  {
    title: "Contact Details",
    icon: "./assets/contacts.png",
  },

  {
    title: "Completed",
    icon: "./assets/complete.png",
  },
];

(() => {
  getOptionTitles("Select campaign types");
  getOptionContent("Select campaign types");
})();

function updateContent(title) {
  getOptionTitles(title);
  getOptionContent(title);
}

function getOptionTitles(selectedTitle) {
  let leftContent = `
  <img
  src="./assets/capagin.svg"
  height="180px"
  style="object-fit: fill"
  alt=""
  srcset=""
/>
  `;

  for (i = 0; i < 5; i++) {
    leftContent += `


   




        <div class="row-align-center">
                <img src="${
                  campaignRegistrationList[i].icon
                }" height="50px" width="50px" alt="" srcset="" />
                <h3 class="${
                  selectedTitle == campaignRegistrationList[i].title ||
                  campaignRegistrationList.findIndex(
                    (o) => o.title == selectedTitle
                  ) > i
                    ? "white-text-active"
                    : "white-text"
                }"> ${campaignRegistrationList[i].title} ${
      campaignRegistrationList.findIndex((o) => o.title == selectedTitle) > i
        ? '<img src="./assets/check.svg">'
        : ""
    }</h3>
            </div>`;
  }

  leftContent += "</div>";

  capaginOptions.innerHTML = leftContent;
}

function getOptionContent(selectedTitle) {
  console.log(selectedTitle);

  let content = `<div> <h3 class="campaign-header">${selectedTitle.toUpperCase()}</h3>`;
  let optionContentList;
  switch (selectedTitle) {
    case "Select campaign types":
      content += '<div class="content" >';
      optionContentList = campaignRegistrationList.find(
        (opt) => opt.title == selectedTitle
      ).contentList;

      if (!optionContentList) return;
      else {
        optionContentList.forEach((e) => {
          console.log(e);
          content += `<div class="box">
                   <div>
                       <img src="${e.image}" alt="" srcset="" />
                   </div>
                   <span>${e.title}</span>
               </div>`;
        });

        content += `</div></div><div class="next-btn-div">
        <div onclick="updateContent('Select data fields to be collected')" class="next-btn">NEXT</div>
        </div>`;

        rightContainer.innerHTML = content;
        console.log(rightContainer.innerHTML);
      }

      break;

    case "Select data fields to be collected":
      content += '<div class="content" >';
      optionContentList = campaignRegistrationList.find(
        (opt) => opt.title == selectedTitle
      ).contentList;

      if (!optionContentList) return;
      else {
        optionContentList.forEach((e) => {
          console.log(e);
          content += `<div class="box">
                     <div>
                         <img src="${e.image}" alt="" srcset="" />
                     </div>
                     <span>${e.title}</span>
                 </div>`;
        });

        content += `</div></div>
        <div style="margin-bottom:5rem"></div>
          <div class="next-btn-div">
          <div class="go-back-btn" onclick="updateContent('Select campaign types')">GO BACK</div>
          <div onclick="updateContent('Select Duration of campaign')" class="next-btn">NEXT</div>
          </div>
          
          `;

        rightContainer.innerHTML = content;
      }

      break;

    case "Select Duration of campaign":
      content += `</div>

      <div style="display:flex;flex-direction:column">

     


      <img height=250rem src="./assets/calender/calender.svg">
      <div style="margin-bottom:5rem"></div>
      </div>
          <div class="next-btn-div">
          <div class="go-back-btn" onclick="updateContent('Select data fields to be collected')">GO BACK</div>
          <div onclick="updateContent('Contact Details')" class="next-btn">NEXT</div>
          </div>
          
          `;

      rightContainer.innerHTML = content;

      break;

    case "Contact Details":
      content += `<div style="display: flex; justify-content: center; align-items: center; height: 60vh;">
       <div>

           <form action="">
               <label for="name">Name</label>
               <input type="text" name="name" id="">

               <label for="contact">Contact No.</label>
               <input type="text" name="contact" id="">

               <label for="purpose">Purpose of campaign</label>
               <textarea cols="25" rows="6 " type="text" name="purpose" id=""> </textarea>
           </form>
       </div>

       <div>

           <img src="./assets/contacts/getintouch.svg" alt="">
       </div>

   </div>`;

      content += `</div></div>
        <div class="next-btn-div">
        <div class="go-back-btn" onclick="updateContent('Select Duration of campaign')">GO BACK</div>
        <div onclick="contactUs()" class="next-btn">SEND</div>

        </div>
        `;

      rightContainer.innerHTML = content;

      break;

    default:
      break;
  }
}

function contactUs() {
  window.open("reachout.html", "_self");
}

// Metrics
const matricsList = [
  {
    title: "Impression",
    image: "assets/MatricImages/page1img1.gif",
    desc: "The number of people who have seen your campaign.",
  },
  {
    title: "Engagement",
    image: "assets/MatricImages/page1img2.gif",
    desc: "The level of interaction your campaign has received, such as clicks, likes, shares, and comments.    ",
  },
  {
    title: "Social Media Followers",
    image: "assets/MatricImages/matricimg4.gif",
    desc: "  The increase in social media followers your campaign has generated.",
  },
  {
    title: "Leads And Sales",
    image: "assets/MatricImages/leadsandsales.gif",
    desc: "The number of leads and sales your campaign has generated.",
  },
  {
    title: "Brand Awareness",
    image: "assets/MatricImages/brandawareness.gif",
    desc: "The impact your campaign has had on increasing brand recognition and awareness.",
  },

  {
    title: "Analytics + Leaderboard",
    image: "assets/MatricImages/analytics.gif",
    desc: " Get detailed analytics of campaign performance with leaderboard based on customer engagement",
  },
];
const metricsDiv = document.getElementById("metric-container");
const sliderDots = document.getElementById("sliderDots");

function slideMetrics(index) {
  console.log(index);
  let content = ``;
  let list;
  switch (index) {
    case 0:
      list = [matricsList[0], matricsList[1], matricsList[2]];
      for (let i = 0; i < list.length; i++) {
        content += `
        <div ${
          i == 0
            ? 'style=" display: flex; flex-direction: column; justify-content: space-between;"'
            : ""
        }  class="matric-list-content${i == 0 ? "-active" : ""}">
        <img src="${list[i].image}" alt="" srcset="" />
        <h1>${list[i].title}</h1>
        <h3>${list[i].desc}</h3>
      </div>`;
      }

      break;

    case 1:
      list = [matricsList[0], matricsList[1], matricsList[2]];
      for (let i = 0; i < list.length; i++) {
        content += `
        <div ${
          i == 0
            ? 'style=" display: flex; flex-direction: column; justify-content: space-between;"'
            : ""
        }  class="matric-list-content${i == 1 ? "-active" : ""}">
        <img src="${list[i].image}" alt="" srcset="" />
        <h1>${list[i].title}</h1>
        <h3>${list[i].desc}</h3>
      </div>`;
      }

      break;

    case 2:
      list = [matricsList[1], matricsList[2], matricsList[3]];
      for (let i = 0; i < list.length; i++) {
        content += `
        <div ${
          i == 0
            ? 'style=" display: flex; flex-direction: column; justify-content: space-between;"'
            : ""
        }  class="matric-list-content${i == 1 ? "-active" : ""}">
        <img src="${list[i].image}" alt="" srcset="" />
        <h1>${list[i].title}</h1>
        <h3>${list[i].desc}</h3>
      </div>`;
      }

      break;

    case 3:
      list = [matricsList[2], matricsList[3], matricsList[4]];
      for (let i = 0; i < list.length; i++) {
        content += `
        <div ${
          i == 0
            ? 'style=" display: flex; flex-direction: column; justify-content: space-between;"'
            : ""
        }  class="matric-list-content${i == 1 ? "-active" : ""}">
        <img src="${list[i].image}" alt="" srcset="" />
        <h1>${list[i].title}</h1>
        <h3>${list[i].desc}</h3>
      </div>`;
      }

      break;

    case 4:
      list = [matricsList[3], matricsList[4], matricsList[5]];
      for (let i = 0; i < list.length; i++) {
        content += `
        <div ${
          i == 0
            ? 'style=" display: flex; flex-direction: column; justify-content: space-between;"'
            : ""
        }  class="matric-list-content${i == 1 ? "-active" : ""}">
        <img src="${list[i].image}" alt="" srcset="" />
        <h1>${list[i].title}</h1>
        <h3>${list[i].desc}</h3>
      </div>`;
      }

      break;

    case 5:
      list = [matricsList[4], matricsList[5]];
      for (let i = 0; i < list.length; i++) {
        content += `
        <div ${
          i == 0
            ? 'style=" display: flex; flex-direction: column; justify-content: space-between;"'
            : ""
        }  class="matric-list-content${i == 1 ? "-active" : ""}">
        <img src="${list[i].image}" alt="" srcset="" />
        <h1>${list[i].title}</h1>
        <h3>${list[i].desc}</h3>
      </div>`;
      }

      break;

    default:
      break;
  }
  metricsDiv.innerHTML = content;
  setSliderContent(index);
}

function setSliderContent(index) {
  let content = ``;

  for (let i = 0; i < 5; i++) {
    content += `<div class="${i == index ? "dot-active" : "dot"}"></div>`;
  }

  content += `<div onclick="slideMetrics(${
    index == 5 ? 0 : index + 1
  })" class="next-matrix">
  ${
    index == 5
      ? '<div class="go-back-btn"> GO BACK </div>'
      : '<img src="./assets/MatricImages/next.svg" alt="" srcset="" />'
  }
</div>`;

  sliderDots.innerHTML = content;
}

slideMetrics(0);
setSliderContent(0);
