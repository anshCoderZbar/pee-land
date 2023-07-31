import React from "react";

export const TokenomicsBox = ({ tokenItems }) => {
  return (
    <>
      {tokenItems?.map((data) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-4  mt-3 ">
            {!data?.url ? (
              <div className="token_card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="discount">
                      <p>{data?.discount}</p>
                    </div>
                    <div className="card_head">{data?.heading}</div>
                  </div>
                  <div className="card_content">{data?.content}</div>
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
