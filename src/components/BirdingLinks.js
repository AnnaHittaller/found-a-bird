import MainLayout from "../layouts/MainLayout";

export default function BirdingLinks() {
  return (
    <MainLayout>
      <div className="link-div">
        <div className="link-wrapper">
          <p>Most common garden birds:</p>
          <a
            href="https://www.cornwallwildlifetrust.org.uk/garden-birds"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.cornwallwildlifetrust.org.uk/sites/default/files/Cornwall%20Wildlife%20Trust%20website%20header%20logo.png"
              alt="eBird"
            />
          </a>
        </div>
        <div className="link-wrapper">
          <p>Bird watching:</p>
          <a href="https://ebird.org/home" target="_blank" rel="noreferrer">
            <img
              src={require("../assets/eBird.png")}
              alt="Cornwall Wildlife Trust"
            />
          </a>
        </div>
        <div className="link-wrapper">
          <p>All about birds:</p>
          <a
            href="https://www.allaboutbirds.org/news/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.allaboutbirds.org/news/wp-content/themes/birdpress2/images/cornell-lab-logo.svg"
              alt="The Cornell Lab of Ornithology"
            />
          </a>
        </div>
        <div className="link-wrapper">
          <p>Bird ID:</p>
          <a
            href="https://merlin.allaboutbirds.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("../assets/Merlin.png")} alt="Merlin Bird ID" />
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
