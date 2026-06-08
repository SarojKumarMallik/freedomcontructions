import React, { useEffect, useRef, useState } from "react";
import "./Vendor.css";
import sbi from "../../assets/img/sbi.svg";
import canara from "../../assets/img/canara.png";
import uco from "../../assets/img/uco.png";
import hdfc from "../../assets/img/hdfc.svg";
import indianover from "../../assets/img/indianoverseas.png";
import pnb from "../../assets/img/pnb.png";

const financeBanks = [
  { name: "SBI", logo: sbi },
  { name: "PNB", logo: pnb },
  { name: "Canara Bank", logo: canara },
  { name: "Indian Overseas Bank", logo: indianover },
  { name: "UCO Bank", logo: uco },
  { name: "HDFC Bank", logo: hdfc },
];

const vendors = [
  { name: "TPCODL", fullName: "TP Central Odisha" },
  { name: "TPNODL", fullName: "TP Northern Odisha" },
  { name: "TPSODL", fullName: "TP Southern Odisha" },
  { name: "TPWODL", fullName: "TP Western Odisha" },
  
];

const Vendor = () => {
  const statsRef = useRef(null);

  const [counts, setCounts] = useState({
    banks: 0,
    states: 0,
    vendors: 0,
  });

  const targets = {
    banks: 15,
    states: 8,
    vendors: 4,
  };

  /* ================= SCROLL COUNTER ================= */
  useEffect(() => {
    let interval = null;

    const startCounter = () => {
      setCounts({ banks: 0, states: 0, vendors: 0 });

      interval = setInterval(() => {
        setCounts((prev) => ({
          banks: prev.banks < targets.banks ? prev.banks + 1 : targets.banks,
          states: prev.states < targets.states ? prev.states + 1 : targets.states,
          vendors: prev.vendors < targets.vendors ? prev.vendors + 1 : targets.vendors,
        }));
      }, 80);
    };

    const stopCounter = () => {
      if (interval) clearInterval(interval);
      setCounts({ banks: 0, states: 0, vendors: 0 });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
        } else {
          stopCounter();
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (interval) clearInterval(interval);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section className="vendor">
      <div className="vendor_container">
        <div className="vendor_header">
          <h2 className="vendor_title">Our Trusted Partners</h2>
          <p className="vendor_subtitle">
            Working with leading financial institutions and registered with major distribution companies
          </p>
        </div>

        <div className="vendor_grid">
          {/* Finance Block */}
          <div className="vendor_block finance_block">
            <div className="block_header">
             
              <div className="block_title_content">
                <h3>Banking Partners</h3>
                <p>Easy finance assistance</p>
              </div>
            </div>

            <div className="vendor_cards">
              {financeBanks.map((bank, index) => (
                <div className="vendor_card finance_card" key={index}>
                  <div className="card_logo">
                    <img src={bank.logo} alt={bank.name} loading="lazy" />
                  </div>
                  <span>{bank.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vendor Block */}
          <div className="vendor_block vendor_block_secondary">
            <div className="block_header">
             
              <div className="block_title_content">
                <h3>Registered Vendor</h3>
                <p>Authorized distribution partner</p>
              </div>
            </div>

            <div className="vendor_cards vendor_cards_demo">
              {vendors.map((item, index) => (
                <div className="vendor_card vendor_card_text" key={index}>
                  <div className="vendor_acronym">{item.name}</div>
                  <div className="vendor_full_name">{item.fullName}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= COUNTER ================= */}
        <div className="vendor_stats" ref={statsRef}>
          <div className="stat_item">
            <div className="stat_number">{counts.banks}+</div>
            <div className="stat_label">Banking Partners</div>
          </div>
          <div className="stat_item">
            <div className="stat_number">{counts.states}+</div>
            <div className="stat_label">States Covered</div>
          </div>
          <div className="stat_item">
            <div className="stat_number">{counts.vendors}+</div>
            <div className="stat_label">Registered Vendors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendor;
