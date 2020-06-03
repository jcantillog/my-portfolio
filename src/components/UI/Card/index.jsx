import React, { useState, useEffect } from "react";
/* Antd */
import { Card as AntCard, Avatar, Skeleton } from "antd";
import { useMemo } from "react";

function Card({
  title = "",
  description = "",
  hoverable = true,
  withMeta = false,
  loading = false,
  children,
  ...props
}) {
  const styles = {
    card: {
      maxHeight: "100%",
    },
    cardBody: {
      maxHeight: 570,
      overflow: "auto",
    },
    cardHeader:
      props.type !== "inner"
        ? {
            backgroundColor: "#364d79",
            color: "white",
          }
        : {},
  };

  const cardContent = useMemo(() => {
    return withMeta ? (
      <Skeleton loading={loading} avatar active>
        <AntCard.Meta
          avatar={<Avatar src={withMeta.avatar} />}
          title={`${withMeta.title}`}
          description={withMeta.description || description}
        />
      </Skeleton>
    ) : children ? (
      children
    ) : (
      description
    );
  }, [withMeta, children, description]);

  return (
    <AntCard
      title={title}
      bordered
      hoverable={hoverable}
      style={styles.card}
      bodyStyle={styles.cardBody}
      headStyle={styles.cardHeader}
      {...props}
    >
      {cardContent}
    </AntCard>
  );
}

export default Card;
