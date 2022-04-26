import React, { useEffect } from "react";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import "./styles/Home.css";
import "firebase/compat/firestore";
import Card from "./Card.jsx";
import AlertDialog from "./mui/AlertDialog.jsx";
import { useHistory } from "react-router-dom";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [user] = useAuthState(auth);
  const history = useHistory();
  if (user)
    return (
      <div className="Home">
        <hr />
        <div className="project">
          <div className="ad">
            <h1>&nbsp;&nbsp;The Treasure map for adventurers</h1>
          </div>
        </div>
        <hr />
        <div className="">
          <h1 className="text-left m-4">
            Hey {user.displayName.split(" ")[0]},
            <br /> Welcome to Travellopedia
          </h1>
          <div className="homeDesc"></div>
        </div>
        <div className="project">
          <p>
            <h2 className="mainHeadings">&nbsp;&nbsp;About our Project</h2>
          </p>
          <div className="project_desc">
            Going out for tours and vacations is a much-needed escape from our
            daily routine as it helps us rejuvenate ourselves and gives us the
            dose of joy and entertainment that we usually miss out due to our
            busy work schedule. ​ Once deciding to go out on a trip planning one
            can be quite tricky and overwhelming in some cases, especially for
            people with no prior knowledge or experience travelling and going
            out on trips.​
            <br /> ​ Our Project aims at solving this problem, by creating a ​
            website that gives a detailed overview regarding all the​ famous and
            well-known tourist locations in India. Any ​ person shall be able to
            open the site and simply choose a ​ state or city they would like to
            visit and our website shall ​ provide them with details of the
            famous locations and ​ sites that are worth visiting in that place.
            ​
          </div>
        </div>

        <div className="travel" id="travel">
          <div className="filler"></div>
          <h1 className = "headingStates">States to Travel </h1>
          <div className="filler2"></div>
          <Card
            photoUrl={
              "https://media.istockphoto.com/photos/jog-falls-during-monsoon-picture-id950777136?b=1&k=20&m=950777136&s=170667a&w=0&h=g6MnlTHZqcQCGe2o6eZ_mDiD57g7cQ35-EyqVGTXR10="
            }
            name={"Karnataka"}
            description={
              "A stunning introduction to southern India, Karnataka is a prosperous, compelling state loaded with a winning blend of urban cool, glittering palaces, national parks, ancient ruins, beaches, yoga centres and legendary travelers' hang-outs."
            }
            key={Math.random()}
          />
          <Card
            photoUrl={
              "https://media.istockphoto.com/photos/scenic-view-of-boats-under-a-blue-sky-in-backwaters-situated-in-town-picture-id1246366598?b=1&k=20&m=1246366598&s=170667a&w=0&h=WnyPe13pcLzsCg43ZZxjyeUUWDApxmogyftBv8ZV5F4="
            }
            name={"Kerala"}
            description={
              "Kerala is a world away from the hectic action of the rest of India, its long, fascinating backstory illuminated by historically evocative cities like Kochi (Cochin) and Thiruvananthapuram (Trivandrum)"
            }
            key={Math.random()}
          />
          <Card
            photoUrl={
              "https://media.istockphoto.com/photos/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-picture-id805563154?b=1&k=20&m=805563154&s=170667a&w=0&h=o_qAAzJKWXDTzXmpy0hdDIF0pfM2ERsMFu_X_umO4lI="
            }
            name={"Rajasthan"}
            description={
              "Here is India's archetypal land of maharajas and medieval forts, palaces and tigers, and kaleidoscopic festivals. Rajasthan really is the jewel in India's crown."
            }
            key={Math.random()}
          />
          <Card
            photoUrl={
              "https://media.istockphoto.com/photos/one-of-the-best-beaches-in-goa-cola-beach-picture-id857389362?b=1&k=20&m=857389362&s=170667a&w=0&h=px0EbbF8Ap96U3Zb7KbUGH2XrRfs47tiGwQSG6FhJmU="
            }
            name={"Goa"}
            description={
              "A kaleidoscopic blend of Indian and Portuguese cultures, sweetened with sun, sea, sand, seafood, susegad and spirituality, Goa is India's pocket-sized paradise."
            }
            key={Math.random()}
          />
          <Card
            photoUrl={
              "https://static-blog.treebo.com/wp-content/uploads/2018/06/Punjab.jpg"
            }
            name={"Punjab"}
            description={
              "A particularly tourist-friendly region, thanks to its strong expatriate connections with the UK and Canada, Punjab, the homeland of India’s Sikh population, provides a wonderful opportunity to go traipsing into the backyards of North India"
            }
            key={Math.random()}
          />
          <Card
            photoUrl={
              "https://media.istockphoto.com/photos/beautiful-hillstation-town-kalpa-in-himachal-pradeshindia-picture-id1174957369?b=1&k=20&m=1174957369&s=170667a&w=0&h=OukwviVp6idMOZH-yViq80dGrshLazUJNl1rgtb7Og8="
            }
            name={"Himachal Pradesh"}
            description={
              "With spectacular snowy peaks and plunging river valleys, beautiful Himachal is India’s outdoor adventure playground. From trekking and climbing to rafting, paragliding and skiing"
            }
            key={Math.random()}
          />
          <Card
            photoUrl={
              "https://media.istockphoto.com/photos/holy-town-varanasi-and-the-river-ganges-picture-id827065008?b=1&k=20&m=827065008&s=170667a&w=0&h=YjToqYIXDJUZvgVFjW8K_WSPAODbZhwRPNcO8SjGo14="
            }
            name={"Uttar Pradesh"}
            description={
              "There are few states more quintessentially Indian than Uttar Pradesh. The subcontinent's historic and religious roots – Hindu, Buddhist, Islamic and secular – intertwine in this land of sacred rivers and vast plains, manifesting in sights of profound importance."
            }
            key={Math.random()}
          />
          <Card
            photoUrl={
              "https://static.india.com/wp-content/uploads/2018/08/maharashtra-1.jpg"
            }
            name={"Maharashtra"}
            description={
              "India’s third-largest and second-most populous state, Maharashtra is an expansive canvas showcasing many of India’s iconic attractions. In the far east of the state are some of the nation’s most impressive national parks, including Tadoba-Andhari Tiger Reserve."
            }
            key={Math.random()}
          />
        </div>
      </div>
    );
  else
    return (
      <div className="pls-login">
        <AlertDialog
          heading="Login Required"
          exit="Quit"
          confirmText="Proceed to Login Page"
          text="Please login to continue to view Places and Destinations"
          main={() => {
            history.push("/login");
          }}
          quit={() => {
            history.push("/");
          }}
        />
      </div>
    );
}

export default Home;
