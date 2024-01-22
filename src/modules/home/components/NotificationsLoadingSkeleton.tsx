import { useState } from "react";
import Skeleton from "react-loading-skeleton";

interface NotificationsLoadingSkeletonProps {
  numOfCards: number;
}

const NotificationsLoadingSkeleton = ({
  numOfCards,
}: NotificationsLoadingSkeletonProps) => {
  const [notifications] = useState(() => Array.from(Array(numOfCards).keys()));

  return (
    <>
      {notifications.map((index) => {
        return (
          <div className="card-notification" key={index}>
            <h3>Tipo de alerta:</h3>
            <span>
              <Skeleton />
            </span>

            <h3>Detalles</h3>
            <span>
              <Skeleton />
            </span>
          </div>
        );
      })}
    </>
  );
};
export default NotificationsLoadingSkeleton;
