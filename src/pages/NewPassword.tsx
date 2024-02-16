import dynamic from "next/dynamic";

const ResetPassword = dynamic(()=>import("../windows/newPass/newPassword"),{ssr:false});

export default function NewPass() {
    return<>
        <ResetPassword/>
    </>
}