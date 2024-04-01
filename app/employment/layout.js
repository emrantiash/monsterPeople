// import "../../assets/css/sb-admin-2.min.css";
// import "../../assets/css/fontawesome.css";
// import "../../assets/vendor/datatables/dataTables.bootstrap4.min.css";

import Script from "next/script";

// import jquery from "@/public/vendor/jquery/jquery";



export default function MasterEmploymentLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
       
   
        {children}

        {/* <Script src="../../../public/vendor/jquery/jquery"></Script>
        <Script src="../../../public/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>

        <Script src="../../../public/vendor/jquery-easing/jquery.easing.min.js"></Script>

        <Script src="../../../public/js/sb-admin-2.min.js"></Script>
      
        <Script src="../../../public/vendor/datatables/jquery.dataTables.min.js"></Script>
        <Script src="../../../public/vendor/datatables/dataTables.bootstrap4.min.js"></Script>

       
        <Script src="../../../public/js/demo/datatables-demo.js"></Script> */}
      </section>
    )
  }