import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";
import PlacesJSON from "../../PlacesJSON";

function Rajasthan() {
  const name = "Rajasthan";
  const image =
    "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/06/27/857610-rajasthan-unlock.gif";
  const arr = ["Hawa Palace","City Palace","Amber Fort"];
  const visitLocationData = PlacesJSON.filter((place) =>
    arr.includes(place.name)
  );

  return (
    <div style={{height:"1900px"}}>
      <StatePage
        stateName={name}
        stateImage={image}
        visitLocationsData={visitLocationData}
        stateDesc={
          <div className="place__desc">
            <span>
              {" "}
              Here is India's archetypal land of maharajas and medieval forts,
              palaces and tigers, and kaleidoscopic festivals. Rajasthan really
              is the jewel in India's crown.
            </span>
            <hr />
            <p>
              <h4> The Golden Triangle</h4>
              The famous and popular Golden Triangle is a traveler’s survey of
              Indian icons. The triangle usually kicks off at the daunting
              mega-metropolis of Delhi, with its majestic Mughal heritage. It
              then angles to Agra, where one of the world’s most famous tombs,
              the Taj Mahal, defines the city with its exquisite proportions.
              The triangle is completed at Jaipur – a city painted pink with
              some of the most colourful bazaars in India. Jaipur is the capital
              and gateway to Rajasthan, and once you've slept in a palace,
              explored a medieval fort or swayed on a camel, you'll want to
              experience more.
            </p>
            <p>
              <h4>Fortified Opulence</h4>
              Rajasthan's big-ticket attractions are its magnificent forts and
              palaces. Powerful forts loom from mountain tops, their
              battle-scarred ramparts still defying long-dead enemies. Spiked
              doors that once held war elephants at bay open onto the twisting
              approaches to the palaces within. Austere and practical give way
              to fantasy and opulence once safely inside. Carved marble and
              stone, fountains and colored glass decorate the halls of business
              and rooms of pleasure. All across Rajasthan there are numerous
              forgotten forts and lovingly restored palaces, including
              Jaisalmer's fairy-tale desert outpost, Amber's honey-hued
              fort-palace and Jodhpur's imposing Mehrangarh, to name just a few.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default Rajasthan;
