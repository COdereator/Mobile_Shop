import React, { useRef, useState, useCallback, useContext } from "react";
import { Rnd } from "react-rnd";
import { useParams } from "react-router-dom";
import modelsData from "./models.json";
import { productContext } from "../Store/StoreContext";

const CustomePhonePage = () => {
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [texts, setTexts] = useState([]);
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(24);
  const [fonts] = useState([
    { name: "Roboto", value: "Roboto, sans-serif" },
    { name: "Playfair", value: "'Playfair Display', serif" },
    { name: "Poppins", value: "Poppins, sans-serif" },
    { name: "Montserrat", value: "'Montserrat', sans-serif" },
  ]);
  const [selectedFont, setSelectedFont] = useState("Roboto, sans-serif");
  const [showGrid, setShowGrid] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [editingTextId, setEditingTextId] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const addText = () => {
    const newText = {
      id: Date.now(),
      content: "Your Full Name",
      x: 50,
      y: 220,
      color: textColor,
      size: fontSize,
      font: selectedFont,
      width: 190,
      height: 100,
    };
    setTexts([...texts, newText]);
  };

  const updateText = useCallback((id, field, value) => {
    setTexts((prevTexts) =>
      prevTexts.map((t) => (t.id === id ? { ...t, [field]: value } : t)),
    );
  }, []);

  const deleteText = (id) => {
    setTexts((prevTexts) => prevTexts.filter((t) => t.id !== id));
    if (editingTextId === id) setEditingTextId(null);
  };

  const startEditing = (id) => {
    if (previewMode) return;
    setEditingTextId(id);
  };

  const stopEditing = () => {
    setEditingTextId(null);
  };

  const clearAll = () => {
    setImage(null);
    setTexts([]);
    setEditingTextId(null);
  };

  const { model, cases } = useParams();
  const modelName = model.split("-").join(" ");
  const name = modelName.split(" ")[0];
  const product = modelsData[name].map((item) => item);
  const singelProd = product.find((item) => item.model == modelName);
  const products = singelProd.products.find(
    (item) => item.title.split(" ").join("-") == cases,
  );

  const { dispatch, setSidebar } = useContext(productContext);

  const blobToDataURL = (blobUrl) =>
    fetch(blobUrl)
      .then((r) => r.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          }),
      );

  const addToCart = async () => {
    let customImage = null;
    if (image && image.startsWith("blob:")) {
      try {
        customImage = await blobToDataURL(image);
      } catch (_) {
        customImage = image;
      }
    } else if (image) {
      customImage = image;
    }
    const payload = {
      type: "custom",
      title: products.title,
      price: Number(products.price) || 0,
      oldPrice: Number(products.oldPrice) || 0,
      image: products.cases,
      quantity: 1,
      customization: {
        image: customImage,
        texts: texts.map((t) => ({
          content: t.content,
          color: t.color,
          size: t.size,
          font: t.font,
          x: t.x,
          y: t.y,
          width: t.width,
          height: t.height,
        })),
      },
    };
    dispatch({ type: "ADD_PRODUCT", payload });
    setSidebar(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-2 sm:p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 w-full max-w-7xl mx-auto">
        {/* LEFT PANEL - Controls */}
        <div className="w-full lg:flex-1 lg:max-w-md space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => fileRef.current.click()}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg text-sm sm:text-base"
              >
                📸 ADD PHOTO
              </button>
              <button
                onClick={addText}
                className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg text-sm sm:text-base"
              >
                👤 ADD NAME
              </button>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              onChange={handleImageUpload}
              hidden
            />
            <button
              onClick={clearAll}
              className="w-full py-2 px-4 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-200 text-sm"
            >
              🗑️ CLEAR ALL
            </button>
          </div>

          {texts.length > 0 && (
            <div className="space-y-3 p-3 sm:p-4 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-base sm:text-lg">Name Settings</h3>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <label className="text-sm font-medium w-20 whitespace-nowrap">
                  Color:
                </label>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => {
                    setTextColor(e.target.value);
                    texts.forEach((text) =>
                      updateText(text.id, "color", e.target.value),
                    );
                  }}
                  className="w-12 h-12 rounded-xl shadow-md cursor-pointer flex-shrink-0"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <label className="text-sm font-medium w-20 whitespace-nowrap">
                  Size:
                </label>
                <div className="flex flex-col sm:flex-row gap-3 items-center flex-1">
                  <input
                    type="range"
                    min="16"
                    max="36"
                    value={fontSize}
                    onChange={(e) => {
                      setFontSize(e.target.value);
                      texts.forEach((text) =>
                        updateText(text.id, "size", parseInt(e.target.value)),
                      );
                    }}
                    className="flex-1 h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-500"
                  />
                  <span className="text-sm font-mono whitespace-nowrap">
                    {fontSize}px
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <label className="text-sm font-medium whitespace-nowrap">
                  Font:
                </label>
                {fonts.map((font) => (
                  <button
                    key={font.value}
                    onClick={() => {
                      setSelectedFont(font.value);
                      texts.forEach((text) =>
                        updateText(text.id, "font", font.value),
                      );
                    }}
                    className={`px-3 py-1 rounded-full text-xs transition-all ${
                      selectedFont === font.value
                        ? "bg-blue-500 text-white shadow-md"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    style={{ fontFamily: font.value }}
                  >
                    {font.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 p-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`p-2 rounded-xl transition-all flex-1 sm:flex-none ${showGrid ? "bg-blue-500 text-white" : "hover:bg-gray-300"}`}
            >
              📐 Grid
            </button>
            <button
              onClick={() => {
                setPreviewMode(!previewMode);
                if (!previewMode) setEditingTextId(null);
              }}
              className={`p-2 rounded-xl transition-all flex-1 sm:flex-none ${previewMode ? "bg-green-500 text-white" : "hover:bg-gray-300"}`}
            >
              👁️ Preview
            </button>
          </div>
        </div>

        {/* PHONE PREVIEW */}
        <div className="w-full flex justify-center items-center flex-1 min-h-[400px] sm:min-h-[500px]">
          <div className="relative w-[280px] h-[560px] sm:w-[290px] sm:h-[580px] max-w-full max-h-[70vh]">
            <div className="absolute inset-0 w-full h-full phone-screen rounded-3xl overflow-hidden">
              {/* Base phone model image */}
              <img
                src={products.cases}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none z-30"
                alt=""
              />

              {/* GRID */}
              {showGrid && (
                <div className="absolute inset-0 z-20 opacity-20 bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
              )}

              {/* UPLOADED IMAGE */}
              {image && (
                <Rnd
                  bounds=".phone-screen"
                  default={{ x: 0, y: 0, width: "100%", height: "100%" }}
                  disableDragging={previewMode}
                  className="absolute inset-0 z-10 pointer-events-auto"
                >
                  <img
                    src={image}
                    alt="custom"
                    className="w-full h-full object-cover rounded-[36px] pointer-events-none"
                  />
                </Rnd>
              )}

              {/* Design area */}
              <div className="absolute left-6 sm:left-8 right-6 sm:right-8 top-16 sm:top-20 bottom-8 sm:bottom-10 z-20 design-area pointer-events-none">
                {/* Text overlays */}
                {texts.map((textItem) => {
                  const isEditing = editingTextId === textItem.id;

                  return (
                    <Rnd
                      key={textItem.id}
                      bounds="parent"
                      position={{ x: textItem.x, y: textItem.y }}
                      size={{
                        width: textItem.width || 190,
                        height: textItem.height || 100,
                      }}
                      onResizeStop={(e, dir, ref, delta, position) => {
                        updateText(textItem.id, "width", ref.offsetWidth);
                        updateText(textItem.id, "height", ref.offsetHeight);
                        if (position) {
                          updateText(textItem.id, "x", position.x);
                          updateText(textItem.id, "y", position.y);
                        }
                      }}
                      onDragStop={(e, d) => {
                        updateText(textItem.id, "x", d.x);
                        updateText(textItem.id, "y", d.y);
                      }}
                      disableDragging={previewMode || isEditing}
                      className="z-40 pointer-events-auto"
                    >
                      <div className="relative w-full h-full">
                        {isEditing ? (
                          <textarea
                            autoFocus
                            value={textItem.content}
                            onChange={(e) =>
                              updateText(textItem.id, "content", e.target.value)
                            }
                            onBlur={stopEditing}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                stopEditing();
                              }
                              if (e.key === "Escape") stopEditing();
                            }}
                            className="w-full h-full rounded-xl text-center font-bold border-2 border-blue-400 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none leading-tight text-sm sm:text-base"
                            style={{
                              color: textItem.color,
                              fontSize: `${textItem.size}px`,
                              fontFamily: textItem.font,
                              lineHeight: 1.1,
                              padding: "4px 6px",
                              background: "transparent",
                              backdropFilter: "blur(4px)",
                              borderImage:
                                "linear-gradient(45deg, #3b82f6, #1d4ed8) 1",
                            }}
                          />
                        ) : (
                          <div
                            onDoubleClick={() => startEditing(textItem.id)}
                            className="w-full h-full rounded-xl font-bold text-center flex items-center justify-center select-none cursor-pointer hover:scale-[1.02] transition-all shadow-xl border border-white/50 overflow-hidden text-sm sm:text-base"
                            style={{
                              color: textItem.color,
                              fontSize: `${textItem.size}px`,
                              fontFamily: textItem.font,
                              lineHeight: 1.15,
                              padding: "2px 4px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div className="w-full h-full overflow-hidden break-words whitespace-pre-wrap leading-tight px-1 max-h-full">
                              {textItem.content}
                            </div>

                            {!previewMode && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteText(textItem.id);
                                }}
                                className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600 transition-all shadow-lg"
                              >
                                ×
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </Rnd>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Buy Section */}
        <div className="w-full lg:w-80 space-y-4 sm:space-y-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {products.title}
            </h2>
            <div className="flex items-baseline justify-center gap-2 mt-2">
              <span className="text-2xl sm:text-3xl font-bold text-green-600">
                ₹{products.price}
              </span>
              <span className="text-base sm:text-lg text-gray-500 line-through">
                ₹{products.oldPrice}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 sm:p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 text-emerald-700 mb-3 flex-wrap">
              <span className="text-xl sm:text-2xl">⭐</span>
              <span className="font-bold text-sm sm:text-base">4.8/5</span>
              <span className="text-xs sm:text-sm">(12.4k)</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 p-2 bg-white/50 rounded-xl">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                Free Express Shipping
              </div>
              <div className="flex items-center gap-2 p-2 bg-white/50 rounded-xl">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                Cash on Delivery
              </div>
              <div className="flex items-center gap-2 p-2 bg-white/50 rounded-xl">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                30-Day Replacement
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 sm:pt-6 border-t">
            <button
              onClick={addToCart}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-lg shadow-xl hover:from-green-600 hover:to-green-700 hover:scale-[1.02] transition-all duration-200"
            >
              🛒 ADD TO CART
            </button>
            <button className="w-full bg-gradient-to-r from-black to-gray-900 text-white py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-lg shadow-xl hover:from-gray-900 hover:to-black hover:scale-[1.02] transition-all duration-200">
              ⚡ BUY NOW - ₹{products.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomePhonePage;
