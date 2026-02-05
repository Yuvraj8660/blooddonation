
import { useEffect, useState } from "react";
import "./donate.css"; // optional CSS file
import { AllInfoOfDonor } from "../services/operations/ViewDonors";

const ViewAllDonars = () => {
  const [allDonor, setAllDonor] = useState([]);


  async function CallDonor() {
    try {
      const data = await AllInfoOfDonor();
      setAllDonor(data)

      console.log("me chala", data)
    }

    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    CallDonor()
  }, [])
  console.log(allDonor)

  return (
    <div>
      <h1>View all donor history</h1>
      <div>
        {
          allDonor?.length <= 0 ? (<p>No Donor history found</p>) : (<>
            {
              allDonor.map(item => {
                return (<> <p>Name of Donor <b>{item?.fullName}</b></p>
                  <p>Group Type  <b>{item?.bloodType}</b></p>
                  <p>Resaon  <b>{item?.reason}</b></p></>)

              })
            }
          </>)
        }
      </div>
    </div>
  );
};

export default ViewAllDonars;
