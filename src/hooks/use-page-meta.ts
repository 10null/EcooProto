import { useEffect } from "react";

/** Keeps the document title and meta description in sync with the active page. */
export const usePageMeta = (title: string, description?: string) => {
  useEffect(() => {
    document.title = title;

    if (!description) return;

    let tag = document.querySelector('meta[name="description"]');

    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }

    tag.setAttribute("content", description);
  }, [title, description]);
};

export default usePageMeta;
