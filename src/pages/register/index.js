import Head from "next/head";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          {/*begin::Theme mode setup on page load*/}
          {/*end::Theme mode setup on page load*/}
          {/*Begin::Google Tag Manager (noscript) */}
          {/*End::Google Tag Manager (noscript) */}
          {/*begin::Main*/}
          {/*begin::Root*/}
          <div className="d-flex flex-column flex-root">
            {/*begin::Authentication - Sign-up */}
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
              {/*begin::Logo*/}
              <a
                href="/metronic8/demo9/../demo9/index.html"
                className="d-block d-lg-none mx-auto py-20"
              >
                <img
                  alt="Logo"
                  src="default.svg"
                  className="theme-light-show h-25px"
                />
                <img
                  alt="Logo"
                  src="default-dark.svg"
                  className="theme-dark-show h-25px"
                />
              </a>
              {/*end::Logo*/}
              {/*begin::Aside*/}
              <div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">
                {/*begin::Wrapper*/}
                <div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack py-2">
                    {/*begin::Back link*/}
                    <div className="me-2">
                      <a
                        href="/metronic8/demo9/../demo9/authentication/layouts/fancy/sign-in.html"
                        className="btn btn-icon bg-light rounded-circle"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr002.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-gray-800">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.60001 11H21C21.6 11 22 11.4 22 12C22 12.6 21.6 13 21 13H9.60001V11Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M9.6 20V4L2.3 11.3C1.9 11.7 1.9 12.3 2.3 12.7L9.6 20Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}{" "}
                      </a>
                    </div>
                    {/*end::Back link*/}
                    {/*begin::Sign Up link*/}
                    <div className="m-0">
                      <span
                        className="text-gray-400 fw-bold fs-5 me-2"
                        data-kt-translate="sign-up-head-desc"
                      >
                        Already a member ?
                      </span>
                      <Link href="/" className="link-primary fw-bold fs-5">
                        Sign In
                      </Link>
                      {/* <a
                        href="/metronic8/demo9/../demo9/authentication/layouts/fancy/sign-in.html"
                        className="link-primary fw-bold fs-5"
                        data-kt-translate="sign-up-head-link"
                      >
                        Sign In
                      </a> */}
                    </div>
                    {/*end::Sign Up link-*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="py-20">
                    {/*begin::Form*/}
                    <form
                      className="form w-100"
                      noValidate="novalidate"
                      id="kt_sign_up_form"
                      data-kt-redirect-url="/metronic8/demo9/../demo9/authentication/layouts/fancy/sign-in.html"
                      action="#"
                    >
                      {/*begin::Heading*/}
                      <div className="text-start mb-10">
                        {/*begin::Title*/}
                        <h1
                          className="text-dark mb-3 fs-3x"
                          data-kt-translate="sign-up-title"
                        >
                          Create an Account
                        </h1>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div
                          className="text-gray-400 fw-semibold fs-6"
                          data-kt-translate="general-desc"
                        >
                          Get unlimited access &amp; earn money
                        </div>
                        {/*end::Link*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Input group*/}
                      <div className="row fv-row mb-7">
                        {/*begin::Col*/}
                        <div className="col-xl-6">
                          <input
                            className="form-control form-control-lg form-control-solid"
                            type="text"
                            placeholder="First Name"
                            name="first-name"
                            autoComplete="off"
                            data-kt-translate="sign-up-input-first-name"
                          />
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-xl-6">
                          <input
                            className="form-control form-control-lg form-control-solid"
                            type="text"
                            placeholder="Last Name"
                            name="last-name"
                            autoComplete="off"
                            data-kt-translate="sign-up-input-last-name"
                          />
                        </div>
                        {/*end::Col*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10">
                        <input
                          className="form-control form-control-lg form-control-solid"
                          type="email"
                          placeholder="Email"
                          name="email"
                          autoComplete="off"
                          data-kt-translate="sign-up-input-email"
                        />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div
                        className="fv-row mb-10"
                        data-kt-password-meter="true"
                      >
                        {/*begin::Wrapper*/}
                        <div className="mb-1">
                          {/*begin::Input wrapper*/}
                          <div className="position-relative mb-3">
                            <input
                              className="form-control form-control-lg form-control-solid"
                              type="password"
                              placeholder="Password"
                              name="password"
                              autoComplete="off"
                              data-kt-translate="sign-up-input-password"
                            />
                            <span
                              className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                              data-kt-password-meter-control="visibility"
                            >
                              <i className="bi bi-eye-slash fs-2" />
                              <i className="bi bi-eye fs-2 d-none" />
                            </span>
                          </div>
                          {/*end::Input wrapper*/}
                          {/*begin::Meter*/}
                          <div
                            className="d-flex align-items-center mb-3"
                            data-kt-password-meter-control="highlight"
                          >
                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px" />
                          </div>
                          {/*end::Meter*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Hint*/}
                        <div
                          className="text-muted"
                          data-kt-translate="sign-up-hint"
                        >
                          Use 8 or more characters with a mix of letters,
                          numbers &amp; symbols.
                        </div>
                        {/*end::Hint*/}
                      </div>
                      {/*end::Input group-*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10">
                        <input
                          className="form-control form-control-lg form-control-solid"
                          type="password"
                          placeholder="Confirm Password"
                          name="confirm-password"
                          autoComplete="off"
                          data-kt-translate="sign-up-input-confirm-password"
                        />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Actions*/}
                      <div className="d-flex flex-stack">
                        {/*begin::Submit*/}
                        <Link href="/" style={{ color: "blanchedalmond" }}>
                          <button
                            id="kt_sign_up_submit"
                            className="btn btn-primary"
                            data-kt-translate="sign-up-submit"
                          >
                            {/*begin::Indicator label*/}
                            <span className="indicator-label">Submit</span>
                            {/*end::Indicator label*/}
                            {/*begin::Indicator progress*/}
                            <span className="indicator-progress">
                              Please wait...{" "}
                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                            </span>
                            {/*end::Indicator progress*/}{" "}
                          </button>
                        </Link>
                        {/*end::Submit*/}
                        {/*begin::Social*/}
                        <div className="d-flex align-items-center">
                          <div className="text-gray-400 fw-semibold fs-6 me-6">
                            Or
                          </div>
                          {/*begin::Symbol*/}
                          <a
                            href="#"
                            className="symbol symbol-circle symbol-45px w-45px bg-light me-3"
                          >
                            <img
                              alt="Logo"
                              src="google-icon.svg"
                              className="p-4"
                            />
                          </a>
                          {/*end::Symbol*/}
                          {/*begin::Symbol*/}
                          <a
                            href="#"
                            className="symbol symbol-circle symbol-45px w-45px bg-light me-3"
                          >
                            <img
                              alt="Logo"
                              src="facebook-3.svg"
                              className="p-4"
                            />
                          </a>
                          {/*end::Symbol*/}
                          {/*begin::Symbol*/}
                          <a
                            href="#"
                            className="symbol symbol-circle symbol-45px w-45px bg-light"
                          >
                            <img
                              alt="Logo"
                              src="apple-black.svg"
                              className="theme-light-show p-4"
                            />
                            {/* <img
                              alt="Logo"
                              src="apple-black-dark.svg"
                              className="theme-dark-show p-4"
                            /> */}
                          </a>
                          {/*end::Symbol*/}
                        </div>
                        {/*end::Social*/}
                      </div>
                      {/*end::Actions*/}
                    </form>
                    {/*end::Form*/}
                  </div>
                  {/*end::Body*/}
                  {/*begin::Footer*/}
                  <div className="m-0">
                    {/*begin::Toggle*/}
                    <button
                      className="btn btn-flex btn-link rotate"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-start"
                      data-kt-menu-offset="0px, 0px"
                    >
                      <img
                        data-kt-element="current-lang-flag"
                        className="w-25px h-25px rounded-circle me-3"
                        src="united-states.svg"
                        alt=""
                      />
                      <span
                        data-kt-element="current-lang-name"
                        className="me-2"
                      >
                        English
                      </span>
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                      <span className="svg-icon svg-icon-3 svg-icon-muted rotate-180 m-0">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}{" "}
                    </button>
                    {/*end::Toggle*/}
                    {/*begin::Menu*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4"
                      data-kt-menu="true"
                      id="kt_auth_lang_menu"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link d-flex px-5"
                          data-kt-lang="English"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              data-kt-element="lang-flag"
                              className="rounded-1"
                              src="united-states.svg"
                              alt=""
                            />
                          </span>
                          <span data-kt-element="lang-name">English</span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link d-flex px-5"
                          data-kt-lang="Spanish"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              data-kt-element="lang-flag"
                              className="rounded-1"
                              src="spain.svg"
                              alt=""
                            />
                          </span>
                          <span data-kt-element="lang-name">Spanish</span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link d-flex px-5"
                          data-kt-lang="German"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              data-kt-element="lang-flag"
                              className="rounded-1"
                              src="germany.svg"
                              alt=""
                            />
                          </span>
                          <span data-kt-element="lang-name">German</span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link d-flex px-5"
                          data-kt-lang="Japanese"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              data-kt-element="lang-flag"
                              className="rounded-1"
                              src="japan.svg"
                              alt=""
                            />
                          </span>
                          <span data-kt-element="lang-name">Japanese</span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link d-flex px-5"
                          data-kt-lang="French"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              data-kt-element="lang-flag"
                              className="rounded-1"
                              src="france.svg"
                              alt=""
                            />
                          </span>
                          <span data-kt-element="lang-name">French</span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Aside*/}
              {/*begin::Body*/}
              <div
                className="d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat"
                style={{ backgroundImage: "url(bg11.png)" }}
              ></div>
              {/*begin::Body*/}
            </div>
            {/*end::Authentication - Sign-up*/}
          </div>
          {/*end::Root*/}
          {/*end::Main*/}
          {/*begin::Javascript*/}
          {/*begin::Global Javascript Bundle(mandatory for all pages)*/}
          {/*end::Global Javascript Bundle*/}
          {/*begin::Custom Javascript(used for this page only)*/}
          {/*end::Custom Javascript*/}
          {/*end::Javascript*/}
          {/* <svg
            id="SvgjsSvg1001"
            width={2}
            height={0}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev"
            style={{
              overflow: "hidden",
              top: "-100%",
              left: "-100%",
              position: "absolute",
              opacity: 0,
            }}
          >
            <defs id="SvgjsDefs1002" />
            <polyline id="SvgjsPolyline1003" points="0,0" />
            <path id="SvgjsPath1004" d="M0 0 " />
          </svg> */}
        </div>
      </main>
    </>
  );
}