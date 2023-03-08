import React from "react";

const FooterCard1 = ({ type, heading }) => {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-lg font-bold">{heading}</h3>
        {type.map((val, index) => {
          return (
            <div key={index}>
              <p className="hover:underline hover:text-gray-400  cursor-pointer ">
                {val.labels}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FooterCard1;
