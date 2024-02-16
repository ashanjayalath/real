import dynamic from "next/dynamic";

const SignUpPage = dynamic(()=>import("../windows/signUp/SignUp"),{ssr:false});
export default function SignUp() {
    return<>
        <SignUpPage/>
    </>
}