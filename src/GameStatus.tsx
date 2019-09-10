import React from "react";

interface GameStatusProps {
  status: string;
}

const GameStatus: React.FC<GameStatusProps> = (props: GameStatusProps) => (
  <div>{props.status}</div>
);

export default GameStatus;
