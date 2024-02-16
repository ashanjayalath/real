import dynamic from "next/dynamic";

const Forget = dynamic(()=>import("../windows/forgetPass/forget"),{ssr:false});

export default function ForgetPass() {
    return<>
        <Forget/>
    </>
}