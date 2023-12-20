import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  canActive: boolean;
  children: ReactNode;
  navigateTo: string;
}

export function ProtectedRoute({
  canActive,
  children,
  navigateTo,
}: ProtectedRouteProps) {
  if (!canActive) {
    return <Navigate to={navigateTo} />;
  }

  return children;
}
