import dynamic from "next/dynamic";

export const Web_Header = dynamic(()=>import('../../Components/NavBar'),{
    ssr:true
})

export const Web_main = dynamic(()=>import('../../Components/Home'),{
    ssr:true,
    loading:()=><h1>Data is loading...</h1>
})

export const EnquiryModel = dynamic(()=>import("../../Components/EnquiryModel"),
{ssr:true}
)

export const Web_Footer = dynamic(()=>import('../../Components/Footer'))

export const Web_Login = dynamic(()=>import('../../Components/LoginFrom'),{
    ssr:false,
    loading:()=><h1>Form Is Loading.... please wait</h1>
})