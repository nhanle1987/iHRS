import '../template/assets/vendor/fontawesome/css/fontawesome.min.css';
import '../template/assets/vendor/fontawesome/css/solid.min.css';
import '../template/assets/vendor/fontawesome/css/brands.min.css';
import '../template/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../template/assets/css/master.css';
import '../template/assets/vendor/flagiconcss/css/flag-icon.min.css';
import '../template/assets/vendor/datatables/datatables.min.css';

export const TemplateScripts = () => {
  return (
    <>
      <script src="/_next/static/template/assets/vendor/jquery/jquery.min.js" defer></script>
      <script src="/_next/static/template/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer></script>
      {/* <script src="/_next/static/template/assets/js/dashboard-charts.js" defer></script> */}
      <script src="/_next/static/template/assets/js/script.js" defer></script>
    </>
  );
}