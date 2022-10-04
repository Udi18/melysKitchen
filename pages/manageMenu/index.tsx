import { ReactElement, useEffect, useState } from "react";
import BaseAdminLayout from "../../components/BaseAdminLayout/BaseAdminLayout";
import { NextPageWithLayout } from "../_app";
import AddMenuItemForm from "../../components/AddMenuItemForm";

const ManageMenu: NextPageWithLayout = () => {
  const [data, setData] = useState<string | undefined>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/dishes");
      const data = await response.json();
      setData(JSON.stringify(data));
    };
    fetchData();
  }, []);
  return <div>{data}</div>;
};

ManageMenu.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseAdminLayout
      title="Manage menu: Mely's Kitchen"
      appBarTitle="Manage menu"
      metaContent="Page to manage the available menu at Mely's Kitchen"
    >
      {page}
    </BaseAdminLayout>
  );
};

export default ManageMenu;
