import type { useNotificationState } from "@/_hooks/notification";

export type _Props = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  notification: ReturnType<typeof useNotificationState>;
  close: () => void;
};
