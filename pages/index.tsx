import Navbar from '@/components/Navbar'
import Preloader from '@/components/Preloader'
import Topbar from '@/components/Topbar'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/img/favicon.png" />
        <title>FindHusly - Real Estate Directory Listing HTML Template</title>
        <link href="plugins/aos/aos.min.css" rel="stylesheet" />
        <link href="plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="plugins/smartmenus/jquery.smartmenus.bootstrap-4.css" rel="stylesheet" />
        <link href="plugins/fontawesome/css/all.min.css" rel="stylesheet" />
        <link href="plugins/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" />
        <link href="plugins/select2/select2.min.css" rel="stylesheet" />
        <link href="plugins/select2-bootstrap-5/select2-bootstrap-5-theme.min.css" rel="stylesheet" />
        <link href="plugins/OwlCarousel2/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="plugins/OwlCarousel2/css/owl.theme.default.min.css" rel="stylesheet" />
        <link href="plugins/magnific-popup/magnific-popup.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
      </Head>
      <Preloader />
      <Topbar />
      <Navbar />
      {/* <!-- Optional JavaScript --> */}
      <script src="plugins/jquery/jquery.min.js"></script>
      <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="plugins/smartmenus/jquery.smartmenus.min.js"></script>
      <script src="plugins/smartmenus/jquery.smartmenus.bootstrap-4.min.js"></script>
      <script src="plugins/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
      <script src="plugins/select2/select2.min.js"></script>
      <script src="plugins/theia-sticky-sidebar/ResizeSensor.min.js"></script>
      <script src="plugins/theia-sticky-sidebar/theia-sticky-sidebar.min.js"></script>
      <script src="plugins/OwlCarousel2/owl.carousel.min.js"></script>
      <script src="plugins/magnific-popup/jquery.magnific-popup.min.js"></script>
      <script src="plugins/waypoints/jquery.waypoints.min.js"></script>
      <script src="plugins/counter-up/jquery.counterup.min.js"></script>
      <script src="plugins/simple-parallax/simpleParallax.min.js"></script>
      <script src="plugins/aos/aos.min.js"></script>

      {/* <!-- Custom Script For This Template --> */}
      <script src="js/script.js"></script>
    </>
  )
}
