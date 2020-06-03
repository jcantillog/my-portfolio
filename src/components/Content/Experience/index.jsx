import React, { useState, useEffect } from "react";
import data from "../../../data";
/* Components */
import Card from "../../UI/Card";
/* Antd */
import { Timeline, Avatar } from "antd";

const styles = {
  paragraph: {
    fontSize: 10,
    margin: 0,
  },
};

function Experience() {
  const experience = data.experience;
  return (
    <Card title="Experience" hoverable={false}>
      <Timeline>
        {experience.map((workplace) => (
          <Timeline.Item
            color={workplace.endDate === "present" ? "green" : "gray"}
          >
            <Card
              withMeta={{
                title: `@ ${workplace.institution}`,
                description: "",
                avatar: workplace.avatar,
              }}
              title={workplace.title}
              description={workplace.description}
              type="inner"
              extra={
                <p
                  style={styles.paragraph}
                >{`${workplace.startDate} - ${workplace.endDate}`}</p>
              }
            />
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
}

export default Experience;
