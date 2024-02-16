import dynamic from "next/dynamic";

const Dash = dynamic(()=>import("../windows/dashboard/Dashboard"),{ssr:false});

export default function Dashboard() {
    return<>
        <Dash/>
    </>
}