import React, { useState, useEffect } from "react";
import data from "../../../data";
/* Components */
import Card from "../../UI/Card";
/* Antd */
import { Row } from "antd";

const styles = {
  paragraph: {
    fontSize: 10,
    margin: 0,
  },
};

function Education() {
  const education = data.education;
  return (
    <Card title="Education" hoverable={false}>
      {education.map((place) => (
        <React.Fragment>
          <Card
            withMeta={{
              title: place.institution,
              description: `${place.city}, ${place.country} / ${place.graduationDate}`,
              avatar: place.avatar,
            }}
            title={place.title}
            description={place.description}
            type="inner"
            extra={
              <p
                style={styles.paragraph}
              >{`${place.startDate} - ${place.endDate}`}</p>
            }
          />
          <Row style={{ marginBottom: 10 }}></Row>
        </React.Fragment>
      ))}
    </Card>
  );
}

export default Education;
