import { snakeCase } from "lodash";
import Button from "../Button/Button";
import usePagination from "./hooks/usePagination";
import ListItem from "./ListItem";
import LoadingItem from "./LoadingItem";
import NoItems from "./NoItems";
import * as S from "./styles";
import { ListProps } from "./types";

const DEFAULT_PAGE_SIZE = 9;

const List = ({
  items,
  itemsPerPage = DEFAULT_PAGE_SIZE,
  isLoading = false,
}: ListProps) => {
  const { handlePagination, pageCount, pages } = usePagination({
    items,
    pageSize: itemsPerPage,
  });

  return (
    <>
      <S.List>
        {isLoading ? (
          <S.Body>
            <LoadingItem />
          </S.Body>
        ) : (
          <S.Body data-testid={"list"}>
            {pages?.[pageCount]?.length ? (
              pages?.[pageCount]?.map(({ id, thumbImg, title }) => (
                <ListItem
                  key={snakeCase(`${id}${title}`)}
                  id={id}
                  thumbImg={thumbImg}
                  title={title}
                />
              ))
            ) : (
              <NoItems />
            )}
          </S.Body>
        )}
        {pages?.[0].length && !isLoading ? (
          <S.Pagination data-testid={"pagination"}>
            <Button
              displayValue="PREV"
              isDisabled={pageCount === 0}
              onClick={() => handlePagination(pageCount - 1)}
            />
            <S.Count data-testid={"pagination-info"}>{`Page ${
              pageCount + 1
            } of ${pages.length}`}</S.Count>
            <Button
              displayValue="NEXT"
              isDisabled={!pages.length || pageCount === pages.length - 1}
              onClick={() => handlePagination(pageCount + 1)}
            />
          </S.Pagination>
        ) : (
          <></>
        )}
      </S.List>
    </>
  );
};

export default List;
