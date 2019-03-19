import React from "react";

export default () => {
  return (
    <div className="div-bottom">
      <footer className="page-footer gradient-45deg-deep-grey">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h4 className="flow-text black-text" href="/">
                {" "}
                Administrator
              </h4>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="black-text" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="black-text" href="#!">
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container black-text">
            © Copyright {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};
