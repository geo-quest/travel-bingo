import * as Icons from "@ant-design/icons";
import React from "react";

interface Props {
  iconName: string;
  style?: React.CSSProperties;
}

export const DynamicIconComponent = ({ iconName, style }: Props) => {
  const IconComponent = Icons[
    iconName as keyof typeof Icons
  ] as React.ComponentType<{ style?: React.CSSProperties }>;

  if (!IconComponent) {
    return <p>Icon not found!</p>;
  }

  return <IconComponent style={style} />;
};
