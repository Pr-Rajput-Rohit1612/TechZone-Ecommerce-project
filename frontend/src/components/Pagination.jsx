import React from "react";

const getPages = (current, total) => {
  let pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 3, total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }

  return pages;
};
// console.log(getPages)

const Pagination = ({ page, pageHandler, dynamicData }) => {
  return (
    <>
      <div className="mt-10  ml-110 space-x-4     justify-between ">
        <button
          disabled={page === 1}
          className={`${
            page === 1 ? "bg-rose-400" : "bg-rose-500"
          } text-white px-3 py-1 rounded-md cursor-pointer `}
          onClick={() => {
            pageHandler(page - 1);
          }}
        >
          prev
        </button>
        {getPages(page, dynamicData).map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => pageHandler(item)}
              className={`${
                page === item ? "bg-rose-700" : "bg-rose-500"
              } text-white px-3 py-1 rounded-md cursor-pointer `}
            >
              {item}
            </button>
          );
        })}
        <button
          disabled={page === dynamicData}
          className={`${
            page === dynamicData ? "bg-rose-400" : "bg-rose-500"
          } text-white px-3 py-1 rounded-md cursor-pointer `}
          onClick={() => {
            pageHandler(page + 1);
          }}
        >
          next
        </button>
      </div>
    </>
  );
};

export default Pagination;
