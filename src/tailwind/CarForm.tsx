import React from "react";

const CarForm = () => {
  return (
    <>
      {/* <div className="bg-blue-100 p-5">
        <h1 className="text-3xl text-blue-600">Hello Tailwind CSS!</h1>
      </div> */}
      <div className="flex">
        <div className="rounded-[0.35rem] border border-solid border-[#e3e6f0]">
          <div className="py-4 px-5 bg-[#f8f9fc]">
            <span className="text-[#4d9eee] font-bold font-base">차량 등록/수정</span>
          </div>
          <div className="p-5 flex flex-col flex-auto gap-2">
            <div className="flex gap-12 justify-start items-center">
              <label className="grow font-bold text-sm">차량번호</label>
              <input className="border border-solid border-[#d1d3e2] py-1.5 px-3 text-[#6e707e] text-xs rounded-[0.35rem]" />
            </div>
            <div className="flex gap-12 justify-start items-center">
              <label className="grow font-bold text-sm">차량구분</label>
              <input className="border border-solid border-[#d1d3e2] py-1.5 px-3 text-[#6e707e] text-xs rounded-[0.35rem]" />
            </div>
            <div className="flex gap-12 justify-start items-center">
              <label className="grow font-bold text-sm">차량소유자</label>
              <input className="border border-solid border-[#d1d3e2] py-1.5 px-3 text-[#6e707e] text-xs rounded-[0.35rem]" />
            </div>
            <div className="flex gap-12 justify-start items-center">
              <label className="grow font-bold text-sm">차량유형</label>
              <input className="border border-solid border-[#d1d3e2] py-1.5 px-3 text-[#6e707e] text-xs rounded-[0.35rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarForm;
