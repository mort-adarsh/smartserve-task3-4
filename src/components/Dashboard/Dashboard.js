import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import Metrix from "./Metrix";
import "mdbreact/dist/css/mdb.css";

let options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};
let data = [
  {
    price: "$406,411.29",
    text: "Total Revenue",
    color1: "rgb(0, 153, 50,.7)",
  },
  {
    price: "$620",
    text: "Total Jobs Avg",
  },
  {
    price: "655",
    text: "Tickets Created",
  },
  {
    price: "735",
    text: "Tickets Scheduled",
  },
  {
    price: "$110,448.8",
    text: "Outstanding Amount",
    color1: "red",
  },
  {
    price: "105",
    text: "Memberships Sold",
  },
  {
    price: "436",
    text: "Jobs Completed",
  },
  {
    price: "65",
    text: "Total Canceled",
  },
];

const data1 = {
  labels: ["Evertt", "Seattle", "Lynnwood", "Bothell", "Mukilteo", "Edmonds"],
  datasets: [
    {
      label: "Revenue for November 2019",
      data: [
        60000, 55000, 50000, 45000, 40000, 35000, 30000, 25000, 20000, 15000,
        10000, 5000,
      ],
      fill: true,
      borderColor: "rgb(0, 153, 50,.7)",
      backgroundColor: "rgb(0, 153, 50,.7)",
    },
  ],
};

const data2 = {
  labels: [
    "Service Plumbing",
    "Bid Work HVAC",
    "Service HVAC",
    "Bid Work Plumbing",
    "HWT Replacement",
    "Maintaince",
    "Material Scale",
  ],
  datasets: [
    {
      label: "Revenue for November 2019",
      data: [140000, 120000, 100000, 80000, 60000, 40000, 20000],
      fill: true,
      borderColor: "rgb(0, 153, 50,.7)",
      backgroundColor: "rgb(0, 153, 50,.7)",
    },
  ],
};
const Dashboard = ({ login, setLogin }) => {
  let history = useHistory();
  useState(() => {
    if (!login) {
      history.push("/login");
    }
    return () => {
      setLogin(false);
    };
  }, []);
  return (
    <>
      <Container fluid>
        <Row style={{ margin: "1em" }}>
          <Col xs={12}>
            <h4
              style={{
                fontWeight: "500",
              }}
            >
              Company Metrixs
            </h4>
          </Col>
          {data.map((el) => (
            <Col xs={12} md={3}>
              <Metrix item={el} />
            </Col>
          ))}
        </Row>
        <br />
        <Row style={{ margin: "1em" }}>
          <Col xs={12}>
            <h4
              style={{
                fontWeight: "500",
              }}
            >
              Revenue By Job Location
            </h4>
          </Col>
          <Col
            xs={12}
            md={6}
            style={{
              boxShadow: "1.6px 1.6px 5px grey",
            }}
          >
            <Bar data={data1} options={options} />
          </Col>
          <Col xs={12} md={6} className="mt-sm-2 mt-md-0">
            <Bar
              data={data2}
              options={options}
              style={{
                boxShadow: "1.6px 1.6px 5px grey",
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
