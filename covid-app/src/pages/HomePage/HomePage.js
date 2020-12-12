import React, { Fragment } from "react";
import "./HomePageCss.css";
import { Timeline } from "react-twitter-widgets";
import Map from "../../components/Map/Map.js";
import HomePageChart from "../../components/Charts/HomePageChart.js";

import { CardBody, Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage(props) {
  // Name passed from the State clicked on
  const setStateName = props.setSName;
  const chart = props.chart;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);
  };
  const formatNumber = (number) => {
    var nf = new Intl.NumberFormat();
    return nf.format(number);
  };
  const infoBox = props.currentUSValues.map(function (values, index) {
    return (
      <div className="d-flex flex-row flex-wrap justify-content-center">
        <div className="position-relative px-5 py-3">
          <Card className="card-box bg-premium-dark border-0 text-light mb-5">
            <CardBody className="b-info-card">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Positive Cases
                  </small>
                  <span className="font-size-xxl mt-1">
                    {formatNumber(values.positive)}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={["fas", "arrow-up"]}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">
                  {formatNumber(values.positiveIncrease)}
                </span>
                <span className="text-white-50">today</span>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="position-relative px-5 py-3">
          <Card className="card-box bg-midnight-bloom text-light mb-5">
            <CardBody className="b-info-card">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Deaths
                  </small>
                  <span className="font-size-xxl mt-1">
                    {formatNumber(values.death)}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={["fas", "arrow-up"]}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">
                  {formatNumber(values.deathIncrease)}
                </span>
                <span className="text-white-50">today</span>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="position-relative px-5 py-3">
          <Card className="card-box bg-plum-plate text-light mb-5">
            <CardBody className="b-info-card">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Hospitalized
                  </small>
                  <span className="font-size-xxl mt-1">
                    {formatNumber(values.hospitalizedCurrently)}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={["fas", "arrow-up"]}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">
                  {formatNumber(values.hospitalizedCurrently)}
                </span>
                <span className="text-white-50">today</span>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="position-relative px-5 py-3">
          <Card className="card-box bg-vicious-stance text-light mb-5">
            <CardBody className="b-info-card">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Total Tests
                  </small>
                  <span className="font-size-xxl mt-1">
                    {formatNumber(values.totalTestResults)}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={["fas", "arrow-up"]}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">
                  {formatNumber(values.totalTestResultsIncrease)}
                </span>
                <span className="text-white-50">today</span>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  });

  const lastUpdateBox = props.currentUSValues.map(function (values, index) {
    return (
      <div key={index}>Last Updated: {formatDate(values.lastModified)}</div>
    );
  });

  const currentStateInfNums = props.currentStateValues.map(function (values) {
    var text = {
      id: "US-" + values.state,
      value: values.positive,
      deaths: values.death,
      hospitalizedCurrently: values.hospitalizedCurrently,
      hospitalizedCumulative: values.hospitalizedCumulative,
      totalTests: values.totalTestResults,
      positiveIncrease: values.positiveIncrease,
      deathIncrease: values.deathIncrease,
      hospitalizedIncrease: values.hospitalizedIncrease,
      totalTestResultsIncrease: values.totalTestResultsIncrease,
    };
    return text;
  });

  return (
    <div id="home-container">
      <div className="b-label-title">
        <div className="app-page-title--first">
          <div className="app-page-title--heading">
            <h1>National COVID-19 Information</h1>
            <div className="app-page-title--description">
              Traveling soon? Get informed with national and state information.
            </div>
          </div>
        </div>
      </div>
      <div className="b-updated-lable">
        <div className="app-page-title--description text-right">
          {lastUpdateBox}
        </div>
      </div>

      <div className="b-info-updater">{infoBox}</div>

      <div className="b-tweet-container">
        <Fragment>
          <Card className="card-box mb-5">
            <CardBody>
              <Timeline
                dataSource={{
                  sourceType: "profile",
                  screenName: "CDCgov",
                }}
                options={{
                  height: "1000",
                }}
              />
            </CardBody>
          </Card>
        </Fragment>
      </div>

      <div className="b-us-map">
        <Fragment>
          <Card className="card-box mb-5 p-3 text-center">
            <div className="my-3">
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Hot Spot Map
              </h6>
              <p className="text-black-50 mb-0">
                Zoom and click on a state for more information.
              </p>
              <Map
                map={chart}
                setSName={setStateName}
                currentstateInfNums={currentStateInfNums}
              />
            </div>
          </Card>
        </Fragment>
        <Fragment>
          <Card className="card-box mb-5 p-3 text-center">
            <div className="my-3">
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Historic Values Last 60 Days
              </h6>
              <div className="home-page-line-chart">
                <HomePageChart historicUSValues={props.historicUSValues} />
              </div>
            </div>
          </Card>
        </Fragment>
      </div>
    </div>
  );
}

export default HomePage;
