// import React from "react";
import './CarForm.scss';

const CarForm = () => {
  return (
    <>
     <div className="car-form-layout">
        <div className="car-form-card">
          <div className="card-title">
            <span>차량 등록/수정</span>
          </div>
          <div className="car-form-body">
            <div className="form-flex">
              <label className="form-label">차량번호</label>
              <input />
            </div>
            <div className="form-flex">
              <label className="form-label">차량구분</label>
              <input />
            </div>
            <div className="form-flex">
              <label className="form-label">차량소유자</label>
              <div>
                <input />
              </div>
            </div>
            <div className="form-flex">
              <label className="form-label">차량유형</label>
              <input />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarForm;
