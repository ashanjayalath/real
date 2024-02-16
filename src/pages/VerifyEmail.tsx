import dynamic from "next/dynamic";

const VerifyPass = dynamic(()=>import("../windows/otp/otp"),{ssr:false});

export default function Verify() {
    return<>
        <VerifyPass/>
    </>
}