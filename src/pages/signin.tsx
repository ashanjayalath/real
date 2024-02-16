import dynamic from "next/dynamic";

const SignInPage = dynamic(()=>import("../windows/signIn/SignIn"),{ssr:false});

export default function SignIn() {
    return<>
        <SignInPage/>
    </>
}