const User = require("../model/UserModel.js")
async function EditInfo(req, res) {

    try {
        const { name  } = req.body;
        if (name === "" || name === undefined) {
             return res.status(404).json({

                success: false,
                message: "name is empty or undefined, Please enter name value"
            })
        }
        //get the id from the request object 
        const userID = req.id
        const data = await User.findById(userID );

        if (data.name.toLowerCase() === name.toLowerCase() || data.name.toLowerCase().length === name.toLowerCase().length) {
            return res.status(404).json({

                success: false,
                message: "your not changing the name, enter different name"
            })
        }

        await User.findByIdAndUpdate(userID,{name})

        return res.status(200).json({
            success: true,
            message: "user updated successfully",

        })

    }

    catch (error) {
        console.log("got error in updating user",error);
        return res.status(423).json({
            message: "Internal server error",
            error: error.message,
            success: false
        })
    }
}

module.exports = EditInfo;


// const User = require("../model/UserModel.js")
// async function NormalEdit(req, res) {

//     try {
//         console.log("Request object postke sabhi data",req)
//         const { newName, existingName } = req.body;


//         if (newName === "" || newName === undefined) {
//             return res.status(404).json({

//                 success: false,
//                 message: "newName is empty or undefined, Please enter name value"
//             })
//         }

//         if (existingName === "" || existingName === undefined) {
//             return res.status(404).json({

//                 success: false,
//                 message: "existingName is empty or undefined, Please enter name value"
//             })
//         }


//         const isUserExit = await User.findOne({ name: existingName });
//         if (!isUserExit) {
//             return res.status(400).json({
//                 success: false,
//                 message: "es name se ralated koi user nhi hai"
//             })
//         }


//         await User.findByIdAndUpdate({ _id: isUserExit._id }, { $set: { name: newName } })


//         return res.status(200).json({
//             success: true,
//             message: "user updated successfully",

//         })

//     }

//     catch (error) {
//         console.log("got error in updating user", error);
//         return res.status(423).json({
//             message: "Internal server error",
//             error: error.message,
//             success: false
//         })
//     }
// }

// module.exports = NormalEdit;