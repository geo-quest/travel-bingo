import { Typography } from "antd";
import Markdown from "react-markdown";

import { TeamChallenge } from "../../data/interfaces";

interface Props {
  challenge: TeamChallenge;
}

const { Title, Paragraph } = Typography;

function SolvedChallenge({ challenge }: Props) {
  return (
    <div className="solved-challenge">
      <Title level={3}>{challenge.name}</Title>
      <Paragraph>
        <strong>Solved at:</strong>
        {challenge.date}
      </Paragraph>
      <Markdown>{challenge.comment}</Markdown>
    </div>
  );
}

export default SolvedChallenge;
