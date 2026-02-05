const DonateKhoon = require("../model/DonateKhoon");

// 📌 Create Donation Request
exports.createDonationKhoonRequest = async (req, res) => {
  try {
    const { fullName, age, mobile, bloodType, reason } = req.body;

    if (!fullName || !age || !mobile || !bloodType) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    const donation = await DonateKhoon.create({
      fullName,
      age,
      mobile,
      bloodType,
      reason,
    });

    return res.status(201).json({
      success: true,
      message: "Donation request submitted successfully",
      data: donation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


exports.getAllDonorsInfo = async (req, res) => {
  try {
    const donors = await DonateKhoon.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: donors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch donors",
    });
  }
};
