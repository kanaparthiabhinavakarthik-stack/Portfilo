import { useEffect, useState } from "react";

/**
 * Highlights the navigation link for whichever section is under a point 35%
 * down the viewport. Recomputed on scroll so it never lags behind a fast jump.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState("");
  const key = ids.join(",");

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    let frame = 0;

    const compute = () => {
      const line = window.innerHeight * 0.35;
      let current = "";
      let bestTop = Number.NEGATIVE_INFINITY;

      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > line) {
          current = el.id;
          break;
        }
        if (rect.top <= line && rect.top > bestTop) {
          bestTop = rect.top;
          current = el.id;
        }
      }

      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}
