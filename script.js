// === Islamic Game API Config ===
const API_URL = "https://script.google.com/macros/s/AKfycbyAMl_7ucuel3_Pjwv63mNU72rTaf3SL1lbKTsvwNojjoD4jfSWyvazrOraX-w-6unF/exec";

// ดึงคำถามจาก Google Sheets ผ่าน Apps Script
async function loadQuestions() {
    try {
        const res = await fetch(API_URL + "?action=getQuestions");
        const data = await res.json();
        return data;
    } catch (e) {
        console.error("Error loading questions:", e);
        return [];
    }
}

// ส่งผลคะแนนไปยัง Stats sheet
async function sendStats(obj) {
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });

        const data = await res.json();
        console.log("sendStats result:", data);
    } catch (e) {
        console.error("Error sending stats:", e);
    }
}
