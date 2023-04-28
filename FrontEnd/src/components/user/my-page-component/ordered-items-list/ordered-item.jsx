import { useQuery } from "react-query";
import { getOrderByOrderIndex } from "../../../../api/api-order";

const OrderedItem = (props) => {
  const orderedItems = props.orderedItems;
  const orderIndex = orderedItems.orderIndex;

  const { data, isLoading, isError, error } = useQuery(
    ["orders", orderIndex],
    async () => await getOrderByOrderIndex(orderIndex)
  );
  console.log("data", data);
  return (
    <div class="h-[120px]   flex items-center">
      {/* div's orderedItemId: {orderedItemId} */}
      <div class="  justify-items-start  ">
        <div class=" h-[90%] m-[20px] ">
          <div class=" flex  ">
            <div class="m-[20px] w-[80px] h-[80px] bg-bgc1 flex justify-center items-center  ">
              <img
                src={orderedItems.product.imgUrl}
                alt={"와인이미지"}
                class="w-[60px] h-[60px] "
              ></img>
            </div>

            <span class="m-[20px] w-[100%] text-2xl">
              {orderedItems.product.name}, {orderedItems.amount}병
              {/* 상품명, 상품개수 */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
