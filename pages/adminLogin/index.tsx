import LoginForm from "../../components/LoginForm";
import { ReactElement, useEffect } from "react";
import BaseAdminLayout from "../../components/BaseAdminLayout/BaseAdminLayout";
import { NextPageWithLayout } from "../_app";

const AdminLogin: NextPageWithLayout = () => {
  useEffect(() => {
    const response = fetch("/api/hello");
  }, []);
  return (
    <>
      <LoginForm />
    </>
  );
};

AdminLogin.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseAdminLayout
      title="Login: Mely's Kitchen"
      appBarTitle="Login"
      metaContent="Login page to manage Mely's content"
    >
      {page}
    </BaseAdminLayout>
  );
};

export default AdminLogin;
