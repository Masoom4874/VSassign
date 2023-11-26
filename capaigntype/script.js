const capaginOptions = document.getElementById("capaginOptions");
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
  let leftContent = ``;
  for (i = 0; i < 5; i++) {
    leftContent += `
        <div class="row-align-center">
                <img src="${
                  campaignRegistrationList[i].icon
                }" height="30px" width="30px" alt="" srcset="" />
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


function contactUs(){
  
  window.open("reachout.html","_self")
  
}
