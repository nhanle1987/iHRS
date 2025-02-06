import Image from 'next/image';
import { I08em } from '../styled';

import Logo from '@/template/assets/img/bootstraper-logo.png';
import Link from 'next/link';

export const TopNavigator = () => {
  return (
    // navbar navigation component
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <button type="button" id="sidebarCollapse" className="btn btn-light">
        <i className="fas fa-bars"></i><span></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <div className="nav-dropdown">
              <a href="#" id="nav1" className="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-link"></i> <span>Quick Links</span> <I08em className="fas fa-caret-down"></I08em>
              </a>
              <div className="dropdown-menu dropdown-menu-end nav-link-menu" aria-labelledby="nav1">
                <ul className="nav-list">
                  <li><a href="" className="dropdown-item"><i className="fas fa-list"></i> Access Logs</a></li>
                  <div className="dropdown-divider"></div>
                  <li><a href="" className="dropdown-item"><i className="fas fa-database"></i> Back ups</a></li>
                  <div className="dropdown-divider"></div>
                  <li><a href="" className="dropdown-item"><i className="fas fa-cloud-download-alt"></i> Updates</a></li>
                  <div className="dropdown-divider"></div>
                  <li><a href="" className="dropdown-item"><i className="fas fa-user-shield"></i> Roles</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <div className="nav-dropdown">
              <a href="#" id="nav2" className="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-user"></i> <span>John Doe</span> <I08em className="fas fa-caret-down"></I08em>
              </a>
              <div className="dropdown-menu dropdown-menu-end nav-link-menu">
                <ul className="nav-list">
                  <li><a href="" className="dropdown-item"><i className="fas fa-address-card"></i> Profile</a></li>
                  <li><a href="" className="dropdown-item"><i className="fas fa-envelope"></i> Messages</a></li>
                  <li><a href="" className="dropdown-item"><i className="fas fa-cog"></i> Settings</a></li>
                  <div className="dropdown-divider"></div>
                  <li><a href="" className="dropdown-item"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export const SideNavigator = () => {
  return (
    <>
      <nav id="sidebar" className="active">
        <div className="sidebar-header">
          {/* <img src="assets/img/bootstraper-logo.png" alt="bootraper logo" className="app-logo" /> */}
          <img
            src={Logo.src}
            className="app-logo"
          />
        </div>
        <ul className="list-unstyled components text-secondary">
          <li>
            <Link href="/"><i className="fas fa-home"></i> Dashboard</Link>
          </li>
          {/* <li>
            <a href="tables.html"><i className="fas fa-table"></i> Tables</a>
          </li>
          <li>
            <a href="charts.html"><i className="fas fa-chart-bar"></i> Charts</a>
          </li>
          <li>
            <a href="icons.html"><i className="fas fa-icons"></i> Icons</a>
          </li>
          <li>
            <a href="#uielementsmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle no-caret-down"><i className="fas fa-layer-group"></i> UI Elements</a>
            <ul className="collapse list-unstyled" id="uielementsmenu">
              <li>
                <a href="ui-buttons.html"><i className="fas fa-angle-right"></i> Buttons</a>
              </li>
              <li>
                <a href="ui-badges.html"><i className="fas fa-angle-right"></i> Badges</a>
              </li>
              <li>
                <a href="ui-cards.html"><i className="fas fa-angle-right"></i> Cards</a>
              </li>
              <li>
                <a href="ui-alerts.html"><i className="fas fa-angle-right"></i> Alerts</a>
              </li>
              <li>
                <a href="ui-tabs.html"><i className="fas fa-angle-right"></i> Tabs</a>
              </li>
              <li>
                <a href="ui-date-time-picker.html"><i className="fas fa-angle-right"></i> Date & Time Picker</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#authmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle no-caret-down"><i className="fas fa-user-shield"></i> Authentication</a>
            <ul className="collapse list-unstyled" id="authmenu">
              <li>
                <a href="login.html"><i className="fas fa-lock"></i> Login</a>
              </li>
              <li>
                <a href="signup.html"><i className="fas fa-user-plus"></i> Signup</a>
              </li>
              <li>
                <a href="forgot-password.html"><i className="fas fa-user-lock"></i> Forgot password</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#pagesmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle no-caret-down"><i className="fas fa-copy"></i> Pages</a>
            <ul className="collapse list-unstyled" id="pagesmenu">
              <li>
                <a href="blank.html"><i className="fas fa-file"></i> Blank page</a>
              </li>
              <li>
                <a href="404.html"><i className="fas fa-info-circle"></i> 404 Error page</a>
              </li>
              <li>
                <a href="500.html"><i className="fas fa-info-circle"></i> 500 Error page</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="users.html"><i className="fas fa-user-friends"></i>Users</a>
          </li>
          <li>
            <a href="settings.html"><i className="fas fa-cog"></i>Settings</a>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

