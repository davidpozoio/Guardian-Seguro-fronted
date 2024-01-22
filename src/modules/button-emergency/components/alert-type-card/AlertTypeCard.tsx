import { useState } from "react";
import "./alertTypeCard.styles.css";
import Skeleton from "react-loading-skeleton";

interface AlertTypeCardProps {
  name: string;
  url: string;
  description?: string;
  onClick: (alertType: string, description: string) => void;
}

export function AlertTypeCard({
  name,
  url,
  onClick,
  description = "",
}: AlertTypeCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <button onClick={() => onClick(name, description)} className="card">
      {isLoading && <Skeleton circle={true} width={100} height={100} />}
      <img
        className="image-card"
        src={url}
        alt={name}
        width="100"
        height="100"
        style={{ display: isLoading ? "none" : "block" }}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
      <span>{name}</span>
    </button>
  );
}
