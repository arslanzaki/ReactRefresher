import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  const lowerTitle = title.toLowerCase();
  return (
    <div className="m-2 p-2 border border-black">
      <h2 className="text-3xl font-bold">{title}</h2>

      {isVisible ? (
        <button
          onClick={() => setIsVisible()}
          className="text-sm border-b border-black"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible()}
          className="text-sm border-b border-black"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div>
      <Section
        title="About"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          visibleSection === "about"
            ? setVisibleSection(null)
            : setVisibleSection("about")
        }
      />
      <Section
        title="Products"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        isVisible={visibleSection === "product"}
        setIsVisible={() =>
          visibleSection === "product"
            ? setVisibleSection(null)
            : setVisibleSection("product")
        }
      />
      <Section
        title="Team"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          visibleSection === "team"
            ? setVisibleSection(null)
            : setVisibleSection("team")
        }
      />
    </div>
  );
};

export default Instamart;
