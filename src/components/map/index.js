/* eslint-disable jsx-a11y/anchor-is-valid */

import "./index.scss";

import React from "react";

const FIXED_POINT = [
  {
    id: 1,
    name: "Nhà trai",
    location: "Ngô Thôn - Xuân Lai - Gia Bình - Bắc Ninh",
    latitude: 21.051291368432317,
    longitude: 106.21109957074654,
    code: "1",
    src: "images/points/point.png",
  },
  { 
    id: 2,
    name: "Nhà gái",
    location: "Ngăm Lương - Lãng Ngâm - Gia Bình - Bắc Ninh",
    latitude: 21.070204127033524,
    longitude: 106.1360620662975,
    code: "2",
    src: "images/points/point.png",
  },
];

const Map = () => {
  const mapEmbed = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29786.478527999152!2d106.16203643058849!3d21.060284690625917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x31359e31f48b1125%3A0x9107150160152708!2zTmfDtCBUaMO0biwgR2lhIELDrG5oLCBC4bqvYyBOaW5oLCBWaeG7h3QgTmFt!3m2!1d21.0530364!2d106.2117664!4m5!1s0x3135a009f7164297%3A0x2287fc87ba243f!2zTmfEg20gTMawxqFuZywgR2lhIELDrG5oLCBC4bqvYyBOaW5oLCBWaeG7h3QgTmFt!3m2!1d21.0706028!2d106.1353055!5e0!3m2!1svi!2s!4v1660560047844!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
  return (
    <div>
      <div className="map-box">
        <div dangerouslySetInnerHTML={{ __html: mapEmbed }}></div>
        <div>
          {FIXED_POINT.map((point, index) => (
            <p key={index}>
              <div className="point-box">
                <div className="marker-circle">
                  <img src={point.src} alt={point.code} /> &nbsp;
                  <a
                    href={`http://maps.google.com/maps?daddr=${point.latitude},${point.longitude}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {point.name}
                  </a>{" "}
                  :<span>{point.location}</span>
                  <br />
                </div>
              </div>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default React.memo(Map);
