import React from "react";
import "./placeForm.scss";

/**
 * 장소 등록 / 수정 페이지
 * @returns
 */
const PlaceForm = () => {
  return (
    <>
      <div className="place-form-layout">
        <div className="place-form-card">
          <div className="card-title">
            <span>장소 등록/수정</span>
          </div>
          <div className="place-form-body">
            <div className="form-flex">
              <label className="form-label">장소명</label>
              <input />
            </div>
            <div className="form-flex">
              <label className="form-label">담당자</label>
              <input />
            </div>
            <div className="form-flex">
              <label className="form-label">연락처</label>
              <input />
            </div>
            <div className="form-flex">
              <label className="form-label">주소</label>
              <input />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceForm;
