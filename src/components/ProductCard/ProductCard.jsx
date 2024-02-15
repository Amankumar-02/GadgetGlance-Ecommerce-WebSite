import { IMG_URL } from "../../utils/constant";
import { useNavigate, Link } from "react-router-dom";

function ProductCard({items}) {
    const {teaserType, imageUrl, name, sellingPrice, mrp, discount, hasPP, skuId, url} = items;
  return (
    <>
    {/* <Link to={"/productInfo/" + url.replaceAll("/", "_")} target="_blank"> */}
    <Link to={"/productInfo/" + url.replaceAll("/", "_")}>
      <div className="productItemHover relative">
        {!teaserType ? null : (
          <>
            <div className="absolute top-0 left-0 text-xs text-white bg-[#007FAD] font-semibold px-2 py-1 z-10 rounded-tl-lg rounded-br-lg w-[60%] overflow-hidden leading-3">
              {teaserType.replaceAll("_", " ")}
            </div>
          </>
        )}
        <div className="productImg">
          <img src={IMG_URL + imageUrl} alt="" className="" />
        </div>
        <h2 className="productTitle text-[#003380] text-sm font-semibold py-6 text-left h-[68px] overflow-hidden">
          {name}
        </h2>
        <div className="flex flex-col gap-1 items-start">
          <p className="text-sm text-gray-500">
            Deal Price:{" "}
            <span className="text-black font-bold">₹{sellingPrice}.00</span>
          </p>
          <p className="text-sm text-gray-500">
            M.R.P: <span className="line-through">₹{mrp}.00</span>
          </p>
          <p className="text-sm text-gray-500">You Save: {discount}</p>
          {hasPP ? (
            <>
              <button className="text-green-600 text-xs rounded-3xl border border-green-600 px-1">
                OFFERS AVAILABLE
              </button>
            </>
          ) : null}
        </div>
      </div>
    </Link>
    </>
  );
}

export default ProductCard;
