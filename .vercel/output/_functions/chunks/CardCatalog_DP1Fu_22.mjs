import { jsxs, jsx } from 'react/jsx-runtime';
import { a as addTicketItem, g as getTicketItems } from './Layout_Eq8BNuUw.mjs';
import * as React from 'react';
import { useState, useEffect } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function Toast({ name, quantity, itsKg }) {
  const positionStyle = {
    position: "fixed",
    top: "1rem",
    right: "1rem"
  };
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3e3);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return isVisible ? /* @__PURE__ */ jsxs(
    "div",
    {
      id: "toast-default",
      className: "flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
      role: "alert",
      style: positionStyle,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 18 20", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" }) }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Fire icon" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ms-3 text-sm font-normal", children: [
          "Se agregaron ",
          quantity,
          " ",
          itsKg ? "KG" : null,
          " ",
          name
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setIsVisible(!isVisible), className: "ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700", "data-dismiss-target": "#toast-default", "aria-label": "Close", children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" }),
          /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" }) })
        ] })
      ]
    }
  ) : null;
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const IntCounter = ({ handleSubtract, handleAdd, saveItem, price, quantity, unit }) => {
  const addAndSave = (event) => {
    handleAdd();
    console.log("quantity", quantity);
    saveItem(event);
  };
  const subtractAndSave = (event) => {
    handleSubtract();
    saveItem(event);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("span", { className: "text-3xl font-bold text-gray-900 mr-1 dark:text-white", children: [
      "$",
      price.toFixed(2)
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "text-white border px-3 py-2 text-xl bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg hover:bg-blue-800 dark:text-white",
        onClick: subtractAndSave,
        children: "-"
      }
    ),
    /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        "span",
        {
          className: "text-3xl font-bold text-gray-900 dark:text-white",
          "data-tooltip-target": "tooltip-default",
          children: quantity
        }
      ) }),
      /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsxs("p", { className: "text-center justify-center", children: [
        "Ya se encuentran",
        /* @__PURE__ */ jsx("br", {}),
        "en tu carrito 🫡"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { id: "tooltip-default", role: "tooltip", className: "absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700", children: /* @__PURE__ */ jsx("div", { className: "tooltip-arrow", "data-popper-arrow": true, children: "Estos productos ya estan agregados a tu carrito 🫡" }) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "text-white border px-3 quantity py-2 text-xl bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg hover:bg-blue-800",
        onClick: addAndSave,
        children: "+"
      }
    )
  ] });
};

const Counter = ({ setQuantity, saveItem, item }) => {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-3xl font-bold text-gray-900 mr-1 dark:text-white", children: [
        "$",
        item.price.toFixed(2)
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gray-900 mr-1 dark:text-white", children: "/Kg" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-rows-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            min: "1",
            value: item.quantity,
            id: "Line1Qty",
            onChange: (e) => setQuantity(parseFloat(e.target.value)),
            className: "h-8 w-8 rounded border-gray-200 bg-gray-50 p-0 mr-2 text-center text-xl text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-xl my-2 font-bold text-gray-900 mr-1 dark:text-white", children: "Kgs" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { onClick: saveItem, className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "Agregar a ticket" }) })
    ] })
  ] });
};

const ImageWithFallback = ({ src, alt, className, defaultSrc }) => {
  const handleError = (event) => {
    event.currentTarget.src = defaultSrc;
  };
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt,
      onError: handleError,
      style: { width: "100%", height: "auto" }
    }
  );
};

function CardCatalog({ name, price, image, id, unit, category, slug }) {
  const [quantity, setQuantity] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [lastQuantity, setLastQuantity] = useState(1);
  const [item, setItem] = useState({
    id,
    name,
    price: price ? price : 0,
    quantity,
    imageUrl: image && image.image_path && image.image_path.primary ? image.image_path.primary : "",
    thumbnail: image && image.image_path && image.image_path.thumbnail ? image.image_path.thumbnail : "",
    unit
  });
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleSubtract = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };
  const saveItem = (e) => {
    e.preventDefault();
    if (quantity === 0) {
      setQuantity(1);
      return;
    }
    setItem((prevItem) => {
      const updatedItem = {
        ...prevItem,
        quantity
        // Usamos el valor actualizado de `quantity`
      };
      addTicketItem(updatedItem);
      setShowToast(true);
      setLastQuantity(quantity);
      return updatedItem;
    });
  };
  const updateFromTicket = () => {
    const itemInTicket = getTicketItems(id);
    if (itemInTicket) {
      setQuantity(itemInTicket.quantity);
    }
  };
  useEffect(() => {
    updateFromTicket();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative item-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700", children: [
    /* @__PURE__ */ jsx(
      ImageWithFallback,
      {
        src: item.imageUrl,
        alt: name,
        defaultSrc: "https://muuch-dev.s3.us-east-2.amazonaws.com/media/default/images/default_image.png"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "px-5 pb-5", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl h-12 font-semibold tracking-tight text-gray-900 dark:text-white", children: name }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-2.5 mb-5", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-1 rtl:space-x-reverse", children: /* @__PURE__ */ jsx("p", { className: "text-gray-900 dark:text-white", children: category }) }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-900 bg-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3", children: item.unit })
      ] }),
      item.unit === "KG" ? /* @__PURE__ */ jsx(
        Counter,
        {
          item,
          setQuantity,
          saveItem,
          price: item.price
        }
      ) : /* @__PURE__ */ jsx(
        IntCounter,
        {
          handleSubtract,
          quantity,
          unit,
          handleAdd,
          saveItem,
          price: item.price
        }
      )
    ] }),
    showToast && /* @__PURE__ */ jsx(Toast, { name, quantity: lastQuantity, itsKg: unit === "KG" })
  ] });
}

export { CardCatalog as C, cn as c };
