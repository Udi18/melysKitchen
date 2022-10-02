import { ReactElement } from "react";
import BaseAdminLayout from "../../components/BaseAdminLayout/BaseAdminLayout";
import { NextPageWithLayout } from "../_app";
import AddMenuItemForm from "../../components/AddMenuItemForm";

const AddMenuItem: NextPageWithLayout = () => {
  return (
    <>
      <AddMenuItemForm />
    </>
  );
};

AddMenuItem.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseAdminLayout
      title="Add menu item: Mely's Kitchen"
      appBarTitle="Add Item"
      metaContent="Page to add items to the full menu at Mely's Kitchen"
    >
      {page}
    </BaseAdminLayout>
  );
};

export default AddMenuItem;
