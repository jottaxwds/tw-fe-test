import React from "react";
import { Meal } from "../../../context/types";
import { DEFAULT_PAGE_SIZE } from "../constants";
import { chunkData } from "../utils";

type UsePaginationProps = {
  items: Meal[];
  pageSize?: number;
};

const usePagination = ({
  items,
  pageSize = DEFAULT_PAGE_SIZE,
}: UsePaginationProps) => {
  const [pageCount, setPageCount] = React.useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pages = React.useMemo(
    () => (items.length < pageSize ? [[...items]] : chunkData(pageSize, items)),
    // This dependency array made in this way intentionally, just avoiding warnings with next line...
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items]
  );

  const handlePagination = React.useCallback(
    (nextPage: number) => {
      if (nextPage >= 0 && nextPage < pages.length) {
        setPageCount(nextPage);
      }
    },
    [pages.length]
  );

  React.useEffect(() => {
    setPageCount(0);
  }, [items]);

  return { handlePagination, pageCount, pages };
};

export default usePagination;
