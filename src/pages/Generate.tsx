import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import background from "../assets/generate.png";
import AppSection from "../components/AppSection";
import AppButton from "../components/AppButton";
import GenerateTemplate from "../components/GenerateTemplate";
import GenerateGenre from "../components/GenerateGenre";
import romance from "../assets/romance.svg";
import horror from "../assets/horror.svg";
import action from "../assets/action.svg";
import adult from "../assets/adult.svg";

import english from "../assets/eng.svg";
import french from "../assets/french.svg";
import spanish from "../assets/spanish.svg";
import russian from "../assets/russia.svg";
import portugal from "../assets/portugal.svg";
import italy from "../assets/italy.svg";
import germany from "../assets/german.svg";
import Slider from "../components/Slider";

const screens = ["1ST", "2ND", "3RD", "4TH", "5TH", "6TH", "7TH"];

export default function Generate() {
  const [currentScreen, setCurrentScreen] = useState(screens[0]);

  const handleNext = () => {
    screens.map(
      (screen, index) =>
        currentScreen === screen && setCurrentScreen(screens[index + 1])
    );
  };
  const handleBack = () => {
    screens.map(
      (screen, index) =>
        currentScreen === screen && setCurrentScreen(screens[index - 1])
    );
  };
  let genres = [
    { icon: horror, title: "Horror" },
    { icon: action, title: "Action" },
    { icon: romance, title: "Romance" },
    { icon: adult, title: "Adult" },
  ];
  let languages = [
    { icon: english, title: "English" },
    { icon: french, title: "French" },
    { icon: italy, title: "Italian" },
    { icon: russian, title: "Russian" },
    { icon: germany, title: "German" },
    { icon: spanish, title: "Spanish" },
    { icon: portugal, title: "Portugese" },
  ];
  return (
    <div className=" pt-10">
      <AppSection
        className=""
        style={{
          backgroundImage: `url(${background})`,
          height: "94vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "none",
        }}
      >
        <TransitionGroup className="relative">
          <CSSTransition
            key={currentScreen}
            timeout={{ enter: 300, exit: 300 }}
            classNames="slide"
          >
            <div className="absolute w-full">
              {currentScreen === screens[0] && (
                <GenerateTemplate subtitle="Write a title for your novel">
                  <input
                    type="text"
                    className="mt-20 mb-10 text-dark p-3 pl-6 placeholder:text-purple md:text-base bg-light rounded shadow-sm focus:outline-none text-sm"
                    placeholder="The Love of a Lifetime"
                    required
                  />
                </GenerateTemplate>
              )}
              {currentScreen === screens[1] && (
                <GenerateTemplate subtitle="Write a title for your novel">
                  <textarea
                    className="w-96 h-64 max-h-64 mt-6 text-dark p-3 pl-6 placeholder:text-purple md:text-base bg-light rounded shadow-sm focus:outline-none text-sm"
                    placeholder="In a world ruled by fear and violence, one hero must fight against a corrupt empire to save the people he loves. With sword in hand and the shadows as his ally, he will stop at nothing to bring hope back to his people."
                    required
                  />
                  <AppButton
                    className="px-8 mt-6 mb-4 py-1"
                    onClick={handleBack}
                  >
                    Back
                  </AppButton>
                </GenerateTemplate>
              )}
              {currentScreen === screens[2] && (
                <GenerateTemplate subtitle="Select the genre of your novel:">
                  <div className="flex my-6 flex-wrap">
                    {genres.map((genre) => (
                      <GenerateGenre
                        key={genre.title}
                        title={genre.title}
                        icon={genre.icon}
                      />
                    ))}
                  </div>

                  <AppButton
                    className="px-8 py-1 mt-6 mb-4"
                    onClick={handleBack}
                  >
                    Back
                  </AppButton>
                </GenerateTemplate>
              )}
              {currentScreen === screens[3] && (
                <GenerateTemplate subtitle="Select the genre of your novel:">
                  <div className="flex my-6 flex-wrap">
                    {languages.map((language) => (
                      <GenerateGenre
                        key={language.title}
                        title={language.title}
                        icon={language.icon}
                      />
                    ))}
                  </div>

                  <AppButton
                    className="px-8 py-1 mt-6 mb-4"
                    onClick={handleBack}
                  >
                    Back
                  </AppButton>
                </GenerateTemplate>
              )}

              {currentScreen === screens[4] && (
                <GenerateTemplate subtitle="Select the language level of  your novel:">
                  <Slider min={0} max={100} sections={5} />

                  <AppButton
                    className="px-8 py-1 mt-6 mb-4"
                    onClick={handleBack}
                  >
                    Back
                  </AppButton>
                </GenerateTemplate>
              )}

              {currentScreen === screens[5] && (
                <GenerateTemplate subtitle="Select the genre of your novel:">
                  <div className="flex my-6 flex-wrap">
                    {languages.map((language) => (
                      <GenerateGenre
                        key={language.title}
                        title={language.title}
                        icon={language.icon}
                      />
                    ))}
                  </div>

                  <AppButton
                    className="px-8 py-1 mt-6 mb-4"
                    onClick={handleBack}
                  >
                    Back
                  </AppButton>
                </GenerateTemplate>
              )}

              <div className="flex justify-center">
                <AppButton className="px-8 py-1" onClick={handleNext}>
                  Next
                </AppButton>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </AppSection>
    </div>
  );
}
