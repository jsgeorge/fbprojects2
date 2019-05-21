import React from "react";

const Pricing = () => {
  return (
    <div className="bck_whie">
      <div className="center_wrapper">
        <div className="pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            <div className="pricing_item">
              <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                  <span>$100</span>
                  <span>Balcony</span>
                </div>
                <div class="pricing_description">Pricing description</div>
                <button className="pricing_buttons">More Info</button>
              </div>
            </div>
            <div className="pricing_item">
              <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                  <span> $250 </span>

                  <span> Mezanene</span>
                </div>
                <div class="pricing_description">Pricing description</div>
                <button className="pricing_buttons">More Info</button>
              </div>
            </div>
            <div className="pricing_item">
              <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                  <span> $400</span>

                  <span> Box</span>
                </div>
                <div class="pricing_description">Pricing description</div>
                <button className="pricing_buttons">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
