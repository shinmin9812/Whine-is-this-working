import { Link } from "react-router-dom";

const AdminMainNav = () => {
  const NavCategory = (props) => {
    const { title, categories } = props;
    return (
      <div class="flex flex-col">
        <h3 class="font-bold text-base">{title}</h3>
        <ul class="flex flex-col mb-5">
          {categories.map((category) => {
            return (
              <li key={categories.name} class="pl-2 mt-2 text-sm">
                <Link to={category.link}>- {category.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div class="inline-block flex flex-col bg-color1 text-[rgb(255,255,255)] w-[16rem]">
      <div class="flex items-center justify-center h-[80px] bg-color0">
        <Link to="/manage">
          <h1 class="font-bold text-xl">ADMIN PAGE</h1>
        </Link>
      </div>
      <div class="flex flex-col py-6 px-12 h-vh">
        <NavCategory
          title={"상품 관리"}
          categories={[
            { name: "상품 등록", link: "/manage/new_product" },
            { name: "상품 관리", link: "/manage/product_list" },
          ]}
        />
        <NavCategory
          title={"주문 관리"}
          categories={[
            { name: "주문 내역", link: "/manage/order" },
            { name: "주문 관리", link: "/manage/order_list" },
          ]}
        />
        <NavCategory
          title={"고객 관리"}
          categories={[
            { name: "취소 내역" },
            { name: "교환 내역" },
            { name: "환불 내역" },
          ]}
        />
        <NavCategory
          title={"카테고리 관리"}
          categories={[{ name: "카테고리 관리", link: "/manage/category" }]}
        />
      </div>
    </div>
  );
};

export default AdminMainNav;
