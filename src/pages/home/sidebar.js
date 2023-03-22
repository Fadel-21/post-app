export default function Sidebar() {
  return (
    <>
      <div
        id="kt_aside"
        className="aside"
        data-kt-drawer="true"
        data-kt-drawer-name="aside"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="auto"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_aside_toggle"
        style={{}}
      >
        {/*begin::Logo*/}
        <div
          className="aside-logo flex-column-auto pt-10 pt-lg-20"
          id="kt_aside_logo"
        >
          <a href="/metronic8/demo9/../demo9/index.html">
            <img alt="Logo" src="demo9.svg" className="h-40px" />
          </a>
        </div>
        {/*end::Logo*/}
        {/*begin::Nav*/}
        <div
          className="aside-menu flex-column-fluid pt-0 pb-7 py-lg-10"
          id="kt_aside_menu"
        >
          {/*begin::Aside menu*/}
          <div
            id="kt_aside_menu_wrapper"
            className="w-100 hover-scroll-overlay-y scroll-ps d-flex"
            data-kt-scroll="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
            data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu"
            data-kt-scroll-offset={0}
            style={{ height: 389 }}
          >
            <div
              id="kt_aside_menu"
              className="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-icon-gray-400 menu-arrow-gray-400 fw-semibold fs-6 my-auto"
              data-kt-menu="true"
            >
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
                className="menu-item here show py-2"
              >
                {/*begin:Menu link*/}
                <span className="menu-link menu-center">
                  <span className="menu-icon me-0">
                    {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                    <span className="svg-icon svg-icon-2x">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x={2}
                          y={2}
                          width={9}
                          height={9}
                          rx={2}
                          fill="currentColor"
                        />
                        <rect
                          opacity="0.3"
                          x={13}
                          y={2}
                          width={9}
                          height={9}
                          rx={2}
                          fill="currentColor"
                        />
                        <rect
                          opacity="0.3"
                          x={13}
                          y={13}
                          width={9}
                          height={9}
                          rx={2}
                          fill="currentColor"
                        />
                        <rect
                          opacity="0.3"
                          x={2}
                          y={13}
                          width={9}
                          height={9}
                          rx={2}
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-dropdown px-2 py-4 w-250px mh-75 overflow-auto">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu content*/}
                    <div className="menu-content ">
                      <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                        Home
                      </span>
                    </div>
                    {/*end:Menu content*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="/metronic8/demo9/../demo9/index.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Default</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="/metronic8/demo9/../demo9/dashboards/ecommerce.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">eCommerce</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="/metronic8/demo9/../demo9/dashboards/projects.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Projects</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="/metronic8/demo9/../demo9/dashboards/online-courses.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Online Courses</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="/metronic8/demo9/../demo9/dashboards/marketing.html"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Marketing</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  <div
                    className="menu-inner flex-column collapse show"
                    id="kt_app_sidebar_menu_dashboards_collapse"
                  >
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/bidding.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Bidding</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link active"
                        href="/metronic8/demo9/../demo9/dashboards/pos.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">POS System</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/call-center.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Call Center</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/logistics.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Logistics</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/website-analytics.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Website Analytics</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/finance-performance.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Finance Performance</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/store-analytics.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Store Analytics</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/social.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Social</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/delivery.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Delivery</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/crypto.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Crypto</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/school.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">School</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/dashboards/podcast.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Podcast</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="/metronic8/demo9/../demo9/landing.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Landing</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  <div className="menu-item">
                    <div className="menu-content">
                      <a
                        className="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible active"
                        data-bs-toggle="collapse"
                        href="#kt_app_sidebar_menu_dashboards_collapse"
                        data-kt-toggle-text="Show 12 More"
                      >
                        <span data-kt-toggle-text-target="true">Show Less</span>{" "}
                        {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                        <span className="svg-icon toggle-on svg-icon-2 me-0">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={5}
                              fill="currentColor"
                            />
                            <rect
                              x="6.0104"
                              y="10.9247"
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                        <span className="svg-icon toggle-off svg-icon-2 me-0">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.3"
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={5}
                              fill="currentColor"
                            />
                            <rect
                              x="10.8891"
                              y="17.8033"
                              width={12}
                              height={2}
                              rx={1}
                              transform="rotate(-90 10.8891 17.8033)"
                              fill="currentColor"
                            />
                            <rect
                              x="6.01041"
                              y="10.9247"
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </a>
                    </div>
                  </div>
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
                className="menu-item py-2"
              >
                {/*begin:Menu link*/}
                <span className="menu-link menu-center">
                  <span className="menu-icon me-0">
                    {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg*/}
                    <span className="svg-icon svg-icon-2x">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.3"
                          d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-dropdown menu-sub-indention px-2 py-4 w-250px mh-75 overflow-auto">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu content*/}
                    <div className="menu-content ">
                      <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                        Pages
                      </span>
                    </div>
                    {/*end:Menu content*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">User Profile</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/user-profile/overview.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Overview</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/user-profile/projects.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Projects</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/user-profile/campaigns.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Campaigns</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/user-profile/documents.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Documents</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/user-profile/followers.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Followers</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/user-profile/activity.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Activity</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Account</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/account/overview.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Overview</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/account/settings.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Settings</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/account/security.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Security</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/account/activity.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Activity</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/account/billing.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Billing</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/account/statements.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Statements</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/account/referrals.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Referrals</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/account/api-keys.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">API Keys</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/account/logs.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Logs</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Authentication</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Corporate Layout</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/corporate/sign-in.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-in</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/corporate/sign-up.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-up</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/corporate/two-steps.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Two-steps</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/corporate/reset-password.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Reset Password</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/corporate/new-password.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Password</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Overlay Layout</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/overlay/sign-in.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-in</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/overlay/sign-up.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-up</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/overlay/two-steps.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Two-steps</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/overlay/reset-password.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Reset Password</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/overlay/new-password.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Password</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Creative Layout</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/creative/sign-in.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-in</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/creative/sign-up.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-up</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/creative/two-steps.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Two-steps</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/creative/reset-password.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Reset Password</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/creative/new-password.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Password</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Fancy Layout</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/fancy/sign-in.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-in</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/fancy/sign-up.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sign-up</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/fancy/two-steps.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Two-steps</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/fancy/reset-password.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Reset Password</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/layouts/fancy/new-password.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Password</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Email Templates</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/email/welcome-message.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Welcome Message
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/email/reset-password.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Reset Password</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/email/subscription-confirmed.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Subscription Confirmed
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/email/card-declined.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Credit Card Declined
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/email/promo-1.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Promo 1</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/email/promo-2.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Promo 2</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/authentication/email/promo-3.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Promo 3</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/authentication/extended/multi-steps-sign-up.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">
                            Multi-steps Sign-up
                          </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/authentication/extended/two-factor-auth.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Two Factor Auth</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/authentication/general/welcome.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Welcome Message</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/authentication/general/verify-email.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Verify Email</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/authentication/general/coming-soon.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Coming Soon</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/authentication/general/password-confirmation.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">
                            Password Confirmation
                          </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/authentication/general/account-deactivated.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">
                            Account Deactivation
                          </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/authentication/general/error-404.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Error 404</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/authentication/general/error-500.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Error 500</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Corporate</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/about.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">About</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/team.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Our Team</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/contact.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Contact Us</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/licenses.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Licenses</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/sitemap.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Sitemap</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Social</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/social/feeds.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Feeds</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/social/activity.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Activty</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/social/followers.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Followers</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/social/settings.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Settings</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Blog</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/blog/home.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Blog Home</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/blog/post.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Blog Post</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Careers</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/careers/list.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Careers List</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/pages/careers/apply.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Careers Apply</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
                className="menu-item py-2"
              >
                {/*begin:Menu link*/}
                <span className="menu-link menu-center">
                  <span className="menu-icon me-0">
                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs037.svg*/}
                    <span className="svg-icon svg-icon-2x">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M2.10001 10C3.00001 5.6 6.69998 2.3 11.2 2L8.79999 4.39999L11.1 7C9.60001 7.3 8.30001 8.19999 7.60001 9.59999L4.5 12.4L2.10001 10ZM19.3 11.5L16.4 14C15.7 15.5 14.4 16.6 12.7 16.9L15 19.5L12.6 21.9C17.1 21.6 20.8 18.2 21.7 13.9L19.3 11.5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.8 2.09998C18.2 2.99998 21.5 6.69998 21.8 11.2L19.4 8.79997L16.8 11C16.5 9.39998 15.5 8.09998 14 7.39998L11.4 4.39998L13.8 2.09998ZM12.3 19.4L9.69998 16.4C8.29998 15.7 7.3 14.4 7 12.8L4.39999 15.1L2 12.7C2.3 17.2 5.7 20.9 10 21.8L12.3 19.4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-dropdown menu-sub-indention px-2 py-4 w-250px mh-75 overflow-auto">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu content*/}
                    <div className="menu-content ">
                      <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                        Utilities
                      </span>
                    </div>
                    {/*end:Menu content*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Modals</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">General</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/general/invite-friends.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Invite Friends</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/general/view-users.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">View Users</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/general/select-users.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Select Users</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/general/upgrade-plan.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Upgrade Plan</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/general/share-earn.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Share &amp; Earn
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Forms</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/forms/new-target.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Target</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/forms/new-card.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Card</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/forms/new-address.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">New Address</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/forms/create-api-key.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Create API Key</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/forms/bidding.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Bidding</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Wizards</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/wizards/create-app.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Create App</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/wizards/create-campaign.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Create Campaign
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/wizards/create-account.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Create Business Acc
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/wizards/create-project.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Create Project</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/wizards/top-up-wallet.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Top Up Wallet</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/wizards/offer-a-deal.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Offer a Deal</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/wizards/two-factor-authentication.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Two Factor Auth
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Search</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/search/users.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Users</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/utilities/modals/search/select-location.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Select Location
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Wizards</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/wizards/horizontal.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Horizontal</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/wizards/vertical.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Vertical</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/wizards/two-factor-authentication.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Two Factor Auth</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/wizards/create-app.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Create App</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/wizards/create-campaign.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Create Campaign</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/wizards/create-account.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Create Account</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/wizards/create-project.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Create Project</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/modals/wizards/top-up-wallet.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Top Up Wallet</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/wizards/offer-a-deal.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Offer a Deal</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Search</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/search/horizontal.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Horizontal</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/search/vertical.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Vertical</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/search/users.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Users</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/utilities/search/select-location.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Location</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
                className="menu-item py-2"
              >
                {/*begin:Menu link*/}
                <span className="menu-link menu-center">
                  <span className="menu-icon me-0">
                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                    <span className="svg-icon svg-icon-2x">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                          fill="currentColor"
                        />
                        <path
                          d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-dropdown menu-sub-indention px-2 py-4 w-250px mh-75 overflow-auto">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu content*/}
                    <div className="menu-content ">
                      <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                        Apps
                      </span>
                    </div>
                    {/*end:Menu content*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                              fill="currentColor"
                            />
                            <path
                              d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Projects</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/projects/list.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">My Projects</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/projects/project.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">View Project</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/projects/targets.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Targets</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/projects/budget.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Budget</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/projects/users.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Users</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/projects/files.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Files</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/projects/activity.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Activity</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/projects/settings.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Settings</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm001.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M18.041 22.041C18.5932 22.041 19.041 21.5932 19.041 21.041C19.041 20.4887 18.5932 20.041 18.041 20.041C17.4887 20.041 17.041 20.4887 17.041 21.041C17.041 21.5932 17.4887 22.041 18.041 22.041Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M6.04095 22.041C6.59324 22.041 7.04095 21.5932 7.04095 21.041C7.04095 20.4887 6.59324 20.041 6.04095 20.041C5.48867 20.041 5.04095 20.4887 5.04095 21.041C5.04095 21.5932 5.48867 22.041 6.04095 22.041Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M7.04095 16.041L19.1409 15.1409C19.7409 15.1409 20.141 14.7409 20.341 14.1409L21.7409 8.34094C21.9409 7.64094 21.4409 7.04095 20.7409 7.04095H5.44095L7.04095 16.041Z"
                              fill="currentColor"
                            />
                            <path
                              d="M19.041 20.041H5.04096C4.74096 20.041 4.34095 19.841 4.14095 19.541C3.94095 19.241 3.94095 18.841 4.14095 18.541L6.04096 14.841L4.14095 4.64095L2.54096 3.84096C2.04096 3.64096 1.84095 3.04097 2.14095 2.54097C2.34095 2.04097 2.94096 1.84095 3.44096 2.14095L5.44096 3.14095C5.74096 3.24095 5.94096 3.54096 5.94096 3.84096L7.94096 14.841C7.94096 15.041 7.94095 15.241 7.84095 15.441L6.54096 18.041H19.041C19.641 18.041 20.041 18.441 20.041 19.041C20.041 19.641 19.641 20.041 19.041 20.041Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">eCommerce</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Catalog</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/catalog/products.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Products</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/catalog/categories.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Categories</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/catalog/add-product.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Add Product</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/catalog/edit-product.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Edit Product</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/catalog/add-category.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Add Category</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/catalog/edit-category.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Edit Category</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Sales</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/sales/listing.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Orders Listing</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/sales/details.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Order Details</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/sales/add-order.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Add Order</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/sales/edit-order.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Edit Order</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Customers</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/customers/listing.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Customer Listing
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/customers/details.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Customer Details
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Reports</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/reports/view.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Products Viewed
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/reports/sales.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Sales</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/reports/returns.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Returns</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/reports/customer-orders.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">
                                Customer Orders
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/ecommerce/reports/shipping.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Shipping</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/ecommerce/settings.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Settings</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/electronics/elc002.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V20H6V21Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M17 2H7C6.4 2 6 2.4 6 3V20H18V3C18 2.4 17.6 2 17 2Z"
                              fill="currentColor"
                            />
                            <path
                              d="M12 4C11.4 4 11 3.6 11 3V2H13V3C13 3.6 12.6 4 12 4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Contacts</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/contacts/getting-started.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Getting Started</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/contacts/add-contact.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Add Contact</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/contacts/edit-contact.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Edit Contact</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/contacts/view-contact.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">View Contact</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Support Center</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/support-center/overview.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Overview</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion mb-1"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Tickets</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/support-center/tickets/list.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Tickets List</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/support-center/tickets/view.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">View Ticket</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion mb-1"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Tutorials</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/support-center/tutorials/list.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Tutorials List</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/support-center/tutorials/post.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Tutorial Post</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/support-center/faq.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">FAQ</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/support-center/licenses.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Licenses</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/support-center/contact.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Contact Us</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen051.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                              fill="currentColor"
                            />
                            <path
                              d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">User Management</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion mb-1"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Users</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/user-management/users/list.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Users List</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/user-management/users/view.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">View User</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Roles</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/user-management/roles/list.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Roles List</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/user-management/roles/view.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">View Role</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/user-management/permissions.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Permissions</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                              fill="currentColor"
                            />
                            <path
                              d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Customers</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/customers/getting-started.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Getting Started</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/customers/list.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Customer Listing</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/customers/view.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Customer Details</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/maps/map002.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.7 4.19995L4 6.30005V18.8999L8.7 16.8V19L3.1 21.5C2.6 21.7 2 21.4 2 20.8V6C2 5.4 2.3 4.89995 2.9 4.69995L8.7 2.09998V4.19995Z"
                              fill="currentColor"
                            />
                            <path
                              d="M15.3 19.8L20 17.6999V5.09992L15.3 7.19989V4.99994L20.9 2.49994C21.4 2.29994 22 2.59989 22 3.19989V17.9999C22 18.5999 21.7 19.1 21.1 19.3L15.3 21.8998V19.8Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M15.3 7.19995L20 5.09998V17.7L15.3 19.8V7.19995Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M8.70001 4.19995V2L15.4 5V7.19995L8.70001 4.19995ZM8.70001 16.8V19L15.4 22V19.8L8.70001 16.8Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M8.7 16.8L4 18.8999V6.30005L8.7 4.19995V16.8Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Subscription</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/subscriptions/getting-started.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Getting Started</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/subscriptions/list.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Subscription List</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/subscriptions/add.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Add Subscription</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/subscriptions/view.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">View Subscription</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                            <path
                              opacity="0.3"
                              d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Invoice Manager</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">View Invoices</span>
                          <span className="menu-arrow" />
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/invoices/view/invoice-1.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Invoice 1</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/invoices/view/invoice-2.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Invoice 2</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="/metronic8/demo9/../demo9/apps/invoices/view/invoice-3.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Invoice 3</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/invoices/create.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Create Invoice</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/files/fil025.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                              fill="currentColor"
                            />
                            <path
                              d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z"
                              fill="currentColor"
                            />
                            <path
                              d="M10.3629 14.0084L8.92108 12.6429C8.57518 12.3153 8.03352 12.3153 7.68761 12.6429C7.31405 12.9967 7.31405 13.5915 7.68761 13.9453L10.2254 16.3488C10.6111 16.714 11.215 16.714 11.6007 16.3488L16.3124 11.8865C16.6859 11.5327 16.6859 10.9379 16.3124 10.5841C15.9665 10.2565 15.4248 10.2565 15.0789 10.5841L11.4631 14.0084C11.1546 14.3006 10.6715 14.3006 10.3629 14.0084Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">File Manager</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/file-manager/folders.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Folders</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/file-manager/files.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Files</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/file-manager/blank.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Blank Directory</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/file-manager/settings.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Settings</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                              fill="currentColor"
                            />
                            <path
                              d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Inbox</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/inbox/listing.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Messages</span>
                          <span className="menu-badge">
                            <span className="badge badge-success">3</span>
                          </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/inbox/compose.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Compose</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/inbox/reply.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">View &amp; Reply</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div
                    data-kt-menu-trigger="click"
                    className="menu-item menu-accordion"
                  >
                    {/*begin:Menu link*/}
                    <span className="menu-link">
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={12}
                              width={7}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Chat</span>
                      <span className="menu-arrow" />
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-accordion">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/chat/private.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Private Chat</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/chat/group.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Group Chat</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="/metronic8/demo9/../demo9/apps/chat/drawer.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Drawer Chat</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="/metronic8/demo9/../demo9/apps/calendar.html"
                    >
                      <span className="menu-icon">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                              fill="currentColor"
                            />
                            <path
                              d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                              fill="currentColor"
                            />
                            <path
                              d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Calendar</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
                className="menu-item py-2"
              >
                {/*begin:Menu link*/}
                <span className="menu-link menu-center">
                  <span className="menu-icon me-0">
                    {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                    <span className="svg-icon svg-icon-2x">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                {/*end:Menu link*/}
                {/*begin:Menu sub*/}
                <div className="menu-sub menu-sub-dropdown px-2 py-4 w-200px w-lg-225px mh-75 overflow-auto">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu content*/}
                    <div className="menu-content ">
                      <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                        Help
                      </span>
                    </div>
                    {/*end:Menu content*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="https://preview.keenthemes.com/html/metronic/docs/base/utilities"
                      target="_blank"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Check out over 200 in-house components"
                      data-kt-initialized={1}
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Components</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="https://preview.keenthemes.com/html/metronic/docs"
                      target="_blank"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Check out the complete documentation"
                      data-kt-initialized={1}
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Documentation</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="/metronic8/demo9/../demo9/layout-builder.html"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Build your layout and export HTML for server side integration"
                      data-kt-initialized={1}
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Layout Builder</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a
                      className="menu-link"
                      href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                      target="_blank"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Changelog v8.1.7</span>
                    </a>
                    {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                </div>
                {/*end:Menu sub*/}
              </div>
              {/*end:Menu item*/}{" "}
            </div>
          </div>
          {/*end::Aside menu*/}{" "}
        </div>
        {/*end::Nav*/}
        {/*begin::Footer*/}
        <div
          className="aside-footer flex-column-auto pb-5 pb-lg-10"
          id="kt_aside_footer"
        >
          {/*begin::Menu*/}
          <div
            className="d-flex flex-center w-100 scroll-px"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-dismiss="click"
            data-bs-original-title="Quick actions"
            data-kt-initialized={1}
          >
            <button
              type="button"
              className="btn btn-custom"
              data-kt-menu-trigger="click"
              data-kt-menu-overflow="true"
              data-kt-menu-placement="top-start"
            >
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr076.svg*/}
              <span className="svg-icon svg-icon-2x">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.3"
                    width={12}
                    height={2}
                    rx={1}
                    transform="matrix(-1 0 0 1 15.5 11)"
                    fill="currentColor"
                  />
                  <path
                    d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}{" "}
            </button>
            {/*begin::Menu 2*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
              data-kt-menu="true"
            >
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                  Quick Actions
                </div>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu separator*/}
              <div className="separator mb-3 opacity-75" />
              {/*end::Menu separator*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">
                  New Ticket
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">
                  New Customer
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div
                className="menu-item px-3"
                data-kt-menu-trigger="hover"
                data-kt-menu-placement="right-start"
              >
                {/*begin::Menu item*/}
                <a href="#" className="menu-link px-3">
                  <span className="menu-title">New Group</span>
                  <span className="menu-arrow" />
                </a>
                {/*end::Menu item*/}
                {/*begin::Menu sub*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Admin Group
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Staff Group
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Member Group
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">
                  New Contact
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu separator*/}
              <div className="separator mt-3 opacity-75" />
              {/*end::Menu separator*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <div className="menu-content px-3 py-3">
                  <a className="btn btn-primary  btn-sm px-4" href="#">
                    Generate Reports
                  </a>
                </div>
              </div>
              {/*end::Menu item*/}
            </div>
            {/*end::Menu 2*/}
          </div>
          {/*end::Menu*/}
        </div>
        {/*end::Footer*/}
      </div>
    </>
  );
}
