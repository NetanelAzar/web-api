const axios = require("axios");

// פונקציה השולחת בקשת POST לנקודת הקצה להתחברות ומחזירה את הטוקן מהתשובה
async function loginAndGetToken() {
  try {
    const response = await axios.post(
      "https://sandbox.d.greeninvoice.co.il/api/v1/account/token",
      {
        id: "db55e31b-fab0-4151-a7d3-099ece6f9dfb",
        secret: "xBZx4Zl4qvhJxno9a2OoQQ",
      }
    );
    const token = response.data.token;
    console.log("Token:", token);
    return token;
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
}

// פונקציה השולחת בקשת POST ליצירת לקוח חדש עם הטוקן שנמצא בכותרת ה-Authorization
async function createNewCustomer() {
  try {
    // קבל את הטוקן מהפונקציה הקודמת
    const token = await loginAndGetToken();

    // הוסף את הטוקן  לה-Authorization
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // בקשת POST ליצירת לקוח חדש
    const newCustomerResponse = await axios.post(
      "https://sandbox.d.greeninvoice.co.il/api/v1/clients",
      {
        // נתוני הלקוח החדש כמו שנדרש

        name: "Yaron Lapidot",
        emails: [],
        paymentTerms: 0,
        taxId: "307933622",
        address: "רחוב ויצמן 15",
        city: "תל אביב-יפו",
        zip: "6241510",
        country: "IL",
        accountingKey: "10404",
        category: 5,
        subCategory: 501,
      },
      config
    );

    console.log("New customer created:", newCustomerResponse.data);
  } catch (error) {
    console.error("Error creating new customer:", error.message);
  }
}

// קריאה לפונקציה ליצירת לקוח חדש
createNewCustomer();
