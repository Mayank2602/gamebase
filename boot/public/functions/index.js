const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.addAdminRole= functions.https.onCall((data,context)=>{
	return admin.auth().getUserByEmail(data.email).then(user=>{
		return admin.auth().setCustomClaims(user.uid,{
			admin:true;
		})
	}).then(()=>{
		return mess:`succesfully made ${data.email} an admin`;
	}).catch(err =>{
		return err;
	});
});