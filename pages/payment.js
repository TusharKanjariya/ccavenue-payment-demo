import CCAvenue from "@/utils/CCAvenue";
import { useRouter } from "next/router";

export default function Payment() {

    const host = "http://localhost:3000";
    const router = useRouter();

    const paymentCCAvenue = () => {
        let paymentData = {
            merchant_id: 'MERCHANT_ID', // Merchant ID (Required)
            order_id: "ORD123", // Order ID - It can be generated from our project
            amount: "50", // Payment Amount (Required)
            currency: "INR", // Payment Currency Type (Required)
            billing_email: "johndoe@gmail.com", // Billing Email (Optional)
            billing_name: "John Doe", // Billing Name (Optional)
            billing_address: "Address Details", // Billing Address (Optional)
            billing_city: "Ahmedabad", // Billing City (Optional)
            billing_state: "Gujarat", // Billing State (Optional)
            billing_zip: "380002", // Billing Zip (Optional)
            billing_country: "India", // Billing COuntry (Optional)
            redirect_url: `${host}/api/ccavenue-handle`, // Success URL (Required)
            cancel_url: `${host}/api/ccavenue-handle`, // Failed/Cancel Payment URL (Required)
            merchant_param1: "Extra Information", // Extra Information (Optional)
            merchant_param2: "Extra Information", // Extra Information (Optional)
            merchant_param3: "Extra Information", // Extra Information (Optional)
            merchant_param4: "Extra Information", // Extra Information (Optional)
            language: 'EN', // Language (Optional)
            billing_tel: "1234567890" // Billing Mobile Number (Optional)
        }

        let encReq = CCAvenue.getEncryptedOrder(paymentData);
        let accessCode = "ACCESS_CODE";
        let URL = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}6&encRequest=${encReq}&access_code=${accessCode}`;
        router.push(URL);
    }

    return (
        <>
            <button onClick={paymentCCAvenue}>Pay Now</button>
        </>
    )
}