import { useRef } from "react";

export function useScrollWithLoop() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container) {
      const maxScrollRef = container.scrollWidth - container.clientWidth;
      if (Math.ceil(container.scrollLeft) >= maxScrollRef) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (container) {
      if (container.scrollLeft <= 0) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -300, behavior: "smooth" });
      }
    }
  };
  return { scrollRef, scrollLeft, scrollRight };
}
