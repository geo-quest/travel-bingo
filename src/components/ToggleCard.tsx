import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  title?: ReactNode;
  style?: React.CSSProperties;
}

const ToggleCard = ({ children, style, ...props }: Props) => {
  const [visible, setVisible] = useState(false);

  const toggleContent = () => {
    setVisible(!visible);
  };

  return (
    <Card
      bordered={false}
      style={style}
      {...props}
      extra={
        <Button onClick={toggleContent} shape="circle">
          {visible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </Button>
      }
    >
      {visible && children}
    </Card>
  );
};

export default ToggleCard;
