import "./index.scss";
import React from "react";
const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="figure">
          <span>Chú rể</span>
          <img
            alt="chú rể"
            src="https://lh3.googleusercontent.com/oFkrRyzqYTE-vevCYpZYvvc11RzhT8gocbLPXn3acwQsZTMdaW4StNq8SdEKquiBjG2Gfa5Zcw8wGSqk5WlR6jR-855qf2aL1_JuQNQ5gjokBgQ_dPG2XexL22Cz2GYa3MZL9dJu=w1920-h1080"       />
          <div className="btn-link">
            {/* <a href="https://www.facebook.com/nvh.neu" target="_blank"  rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/facebook.png"
              />
            </a> */}
            <a href="tel:0869751666" target="_blank"  rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/apple-phone.png"
              />
            </a>
          </div>
        </div>
        <img
          alt="loved"
          src="https://img.icons8.com/color/48/000000/filled-like.png"
        />
        <div className="figure">
          <span>Cô dâu</span>
          <img
            src="https://lh3.googleusercontent.com/4H4iJxDFHVbH0b2X6wOofQ0MEvDEFtK3EhWixo2fwOf3Z1E1MSad6sk3aOts3gMYeUkjNmrZZPm-SFf7cyh7DGv-1UDHTWjAvV8RsHHCBcN2qQKeKqi8c75M1Mo0ISnRGXNL39P9=w1920-h1080"
            alt="cô dâu"
          />
          <div className="btn-link">
            {/* <a href="https://www.facebook.com/huonglt.hus7694" target="_blank"  rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/facebook.png"
              />
            </a>{" "} */}
            <a href="tel:0964776324" target="_blank"  rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/apple-phone.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Contact);
