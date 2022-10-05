import { ReactElement, useEffect, useState } from "react";
import BaseAdminLayout from "../../components/BaseAdminLayout/BaseAdminLayout";
import DishCard from "../../components/DishCard";
import { NextPageWithLayout } from "../_app";

const ManageMenu: NextPageWithLayout = () => {
  const [dishes, setDishes] = useState<Dish[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/dishes");
      const data = await response.json();
      setDishes(data.dishes as Dish[]);
    };
    fetchData();
  }, []);
  return (
    <div>
      {dishes
        ? dishes?.map((dish, index) => (
            <DishCard key={`key-${index}`} {...dish} />
          ))
        : ""}
    </div>
  );
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
