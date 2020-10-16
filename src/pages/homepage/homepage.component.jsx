import React from "react";
// import { render } from "react-dom";

import "./homepage.styles.scss";
import { Link } from "react-router-dom";

import { ReactComponent as PlayButton } from "../../assets/playButton.svg";
import Card from "../../components/card/card.component";
import LeadButton from "../../components/lead-button/lead-button.component";
import ProgressBar from "../../components/progress-bar/progress-bar.component";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

import ModeCard from "../../components/mode-card/mode-card.component";
import MatchCard from "../../components/match-card/match-card.component";

const HomePage = () => {
  return (
    <div className="homepage" id="homepage">
      <Card className="main-card">
        <LeadButton
          background="rgba(0, 153, 255, 0.9)"
          boxShadow="0px 22px 27px 1px rgba(0, 11, 36, 0.36)"
        >
          <h2 className="homepage-btn-1-title">Start New Assessment</h2>
          <PlayButton />
        </LeadButton>
        <h3
          style={{
            marginTop: "1.5rem",
            marginLeft: "2rem",
          }}
        >
          PROGRESS
        </h3>
        <ProgressBar />
        <LeadButton
          background="linear-gradient(94deg, rgba(0, 153, 255, 0.8) -16.63%, rgba(232, 93, 113, 0.8) 116.15%)"
          boxShadow="0px 22px 27px 1px rgba(0, 11, 36, 0.36)"
        >
          <div>
            <h2 className="homepage-btn-2-title">IELTS PROGRESS</h2>
            <h3 className="homepage-btn-2-subtitle">KEEP IMPROVING !</h3>
          </div>
          <div className="circular-progressbar-container">
            <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
              {(percentage) => (
                <CircularProgressbar
                  value={percentage}
                  styles={buildStyles({
                    minValue: 60,
                    maxValue: 90,
                    pathTransitionDuration: 0.15,
                    textColor: "red",
                    pathColor: "rgba(0, 153, 255, 1)",
                    trailColor: "white",
                    rotation: `${percentage / 100 + 0.2}`,
                  })}
                />
              )}
            </ChangingProgressProvider>
          </div>
        </LeadButton>
        <h4 className="updation-text">
          <span>Last Update: </span> 20 July,Monday
        </h4>
        <LeadButton
          background="linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)"
          boxShadow="0px 22px 27px 1px rgba(0, 11, 36, 0.36)"
        >
          <h2 className="homepage-btn-1-title">Another Lead Button</h2>
          <PlayButton />
        </LeadButton>
        <Link to="/" className="show-more">
          <h4>Show More</h4>
        </Link>
      </Card>
      <Card className="graph-card">Graph</Card>
      <Card className="mode-card">
        <h4 className="mode-name">Dual Mode</h4>
        <ModeCard className="previous-conv">Previous Conversation</ModeCard>
        <ModeCard className="previous-work">Previous Work</ModeCard>
        <div className="matched-convo">
          <h4 className="title">Matched For Conversation</h4>
          <MatchCard className="match" name="Ananya" />
          <MatchCard className="match" name="Sharma" />
          <MatchCard className="match" name="Happy" />
          <MatchCard className="match" name="Aakash" />
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
