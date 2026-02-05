import { useEffect, useState } from "react";
import "./alldonate.css";
import { AllInfoOfDonor } from "../services/operations/ViewDonors";

const ViewAllDonars = () => {
  const [allDonor, setAllDonor] = useState([]);

  async function CallDonor() {
    try {
      const data = await AllInfoOfDonor();
      setAllDonor(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    CallDonor();
  }, []);

  return (
    <div className="donor-container">
      <h1 className="title">🩸All  Donor's</h1>

      {allDonor?.length <= 0 ? (
        <p className="empty">No Donor history found</p>
      ) : (
        <div className="card-grid">
          {allDonor.map((item, index) => (
            <div className="donor-card" key={index}>
              <h2 className="donor-name">{item?.fullName}</h2>

              <div className="info">
                <span>Blood Group</span>
                <b className="blood">{item?.bloodType}</b>
              </div>

              <div className="info">
                <span>Reason</span>
                <b>{item?.reason}</b>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAllDonars;

