import React from "react";

export const TokenomicsBox = ({ tokenItems }) => {
  return (
    <>
      {tokenItems?.map((data) => {
        return (
          <div
            key={data?.id}
            className="col-sm-12 col-md-6 col-lg-6 col-xl-4  mt-3 "
          >
            {!data?.url ? (
              <div
                className="token_card"
                style={{ backgroundColor: data?.diff ? "#CAD2C5" : " #2f3e46" }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="discount">
                      <p style={{ color: data?.diff ? "#CAD2C5" : "#84a98c" }}>
                        {data?.discount}
                      </p>
                    </div>
                    <div
                      className={`card_head ${
                        data?.diff ? "primary-dark-color" : null
                      }`}
                    >
                      {data?.heading}
                    </div>
                  </div>
                  <div
                    className="card_content"
                    style={{ color: data?.diff ? "#161b1e" : "#8f8f8f" }}
                  >
                    {data?.content}
                  </div>
                </div>
              </div>
            ) : (
              <div className="frog_img">
                <img src={data?.url} alt="image" />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
