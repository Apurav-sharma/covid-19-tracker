import React from "react";
import "./cards.css";
import { Card } from "react-bootstrap";
import CountUp from "react-countup";

function Cards({ data }) {
  return (
    <div className="d-flex mt-4 gap-3">
      <Card style={{ borderBottom: "10px solid rgba(0, 0, 255, 0.5)" }}>
        <Card.Header>
          <Card.Subtitle>Total Cases</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>
            {data && data.cases && (
              <CountUp start={0} end={data.cases} separator="," />
            )}
          </Card.Subtitle>
          <p>
            {new Date().toDateString()}
            <br />
            No of Total cases of covid 19
          </p>
        </Card.Body>
      </Card>
      <Card style={{ borderBottom: "10px solid rgba(0, 255, 0, 0.5)" }}>
        <Card.Header>
          <Card.Subtitle>Recovered</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>
            {data && data.recovered && (
              <CountUp start={0} end={data.recovered} separator="," />
            )}
          </Card.Subtitle>
          <p>
            {new Date().toDateString()}
            <br />
            No of Recovered cases of covid 19
          </p>
        </Card.Body>
      </Card>
      <Card style={{ borderBottom: "10px solid rgba(255, 0, 0, 0.5)" }}>
        <Card.Header>
          <Card.Subtitle>Deaths</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>
            {data && data.deaths && (
              <CountUp start={0} end={data.deaths} separator="," />
            )}
          </Card.Subtitle>
          <p>
            {new Date().toDateString()}
            <br />
            No of Deaths cases of covid 19
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
