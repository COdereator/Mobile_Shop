import React from "react";

/**
 * Phone preview for cart/sidebar: white-outlined phone with custom design inside (like reference).
 * Shows: white border frame, notch at top, design (image + text) filling the "screen" area.
 */
const CartPhonePreview = ({ item, size = "sm" }) => {
  const isCustom = item.type === "custom";
  const customImage = isCustom && item.customization?.image;
  const texts = (isCustom && item.customization?.texts) || [];
  const frameImage = item.image || null;

  const sizeClasses = {
    sm: "w-[72px] h-[140px] rounded-[14px]",
    md: "w-[100px] h-[200px] rounded-[20px]",
    lg: "w-[120px] h-[240px] rounded-[24px]",
  };
  const borderClasses = {
    sm: "border-[3px]",
    md: "border-4",
    lg: "border-4",
  };
  const innerInset = {
    sm: "inset-[8%] rounded-[8px]",
    md: "inset-[10%] rounded-[12px]",
    lg: "inset-[10%] rounded-[14px]",
  };

  const s = sizeClasses[size] || sizeClasses.sm;
  const b = borderClasses[size] || borderClasses.sm;
  const inner = innerInset[size] || innerInset.sm;

  return (
    <div
      className={`flex-shrink-0 overflow-hidden bg-white shadow-md ${s} ${b} border-white`}
      style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.08)" }}
    >
      <div className="relative w-full h-full overflow-hidden bg-gray-100">
        {/* Notch (top center) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-gray-400 rounded-b z-10"
          style={{
            top: "2%",
            width: size === "sm" ? "22%" : "20%",
            height: size === "sm" ? "3%" : "2.5%",
          }}
        />
        {/* Inner "screen" = your design (full area for case preview) */}
        <div className={`absolute overflow-hidden bg-gray-900 ${inner}`}>
          {customImage ? (
            <img
              src={customImage}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : frameImage && isCustom ? (
            <img
              src={frameImage}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <span className="text-gray-500 text-[10px]">No image</span>
            </div>
          )}
          {texts.length > 0 && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {texts.slice(0, 2).map((txt, idx) => (
                <span
                  key={idx}
                  className="font-bold truncate max-w-full px-0.5 text-white"
                  style={{
                    color: txt.color || "#fff",
                    fontSize: size === "sm" ? "5px" : size === "md" ? "7px" : "9px",
                    fontFamily: txt.font || "sans-serif",
                  }}
                >
                  {txt.content || "Text"}
                </span>
              ))}
        <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[18%] h-[1.5%] bg-gray-500 rounded-full opacity-70" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPhonePreview;
