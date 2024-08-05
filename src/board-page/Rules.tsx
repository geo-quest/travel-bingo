/* eslint-disable arrow-parens */
import { UnorderedListOutlined } from "@ant-design/icons";
import { List } from "antd";
import React from "react";

import ToggleCard from "../components/ToggleCard";

interface RulesProps {
  rules: string[];
}

const Rules: React.FC<RulesProps> = ({ rules }) => (
  <ToggleCard
    title={
      <div>
        <UnorderedListOutlined style={{ marginRight: 8 }} />
        Rules
      </div>
    }
    style={{ marginTop: "10px" }}
  >
    <List
      dataSource={rules}
      renderItem={(rule) => <List.Item>{rule}</List.Item>}
    />
  </ToggleCard>
);

export default Rules;
