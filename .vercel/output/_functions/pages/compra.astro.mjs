import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CvqpSew_.mjs';
import 'kleur/colors';
import { t as ticketItems, $ as $$Layout } from '../chunks/Layout_Eq8BNuUw.mjs';
import { $ as $$SectionTitle } from '../chunks/SectionTitle_Bgs6JoK8.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { S as SITE_URL } from '../chunks/https_CioBuwQb.mjs';
import { atom } from 'nanostores';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
export { renderers } from '../renderers.mjs';

const sendOrder = async (order) => {
  const { user, items: $ticketItems, coupon, address } = order;
  const url = `${SITE_URL}/api/v1/orders/`;
  let ticket;
  ticket = Object.values($ticketItems).map((ticketItem) => {
    const item = {
      id: ticketItem.id,
      quantity: ticketItem.quantity
    };
    return item;
  });
  const data = {
    items: ticket,
    phone: user.phone,
    name: user.name,
    email: user.email,
    user,
    coupon,
    address
  };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    return {
      success: false,
      id: "",
      discount: null
    };
  }
  const response = await res.json();
  console.log(response);
  const orderResponse = {
    success: true,
    id: response.preference_id,
    discount: response.discount
  };
  console.log(orderResponse);
  return orderResponse;
};

const userInfo = atom({
  name: "",
  email: "",
  address: {
    street: "",
    city: "",
    state: "",
    county: "",
    neighborhood: ""
  },
  phone: ""
});

function useSendTicketForm() {
  const initialAddress = {
    street: "",
    city: "",
    state: "",
    county: "",
    neighborhood: "",
    complement: "",
    postalCode: ""
  };
  const [orderId, setOrderId] = useState({ success: false, id: "", discount: null });
  const [address, setAddress] = useState(initialAddress);
  const [phone, setPhone] = useState(userInfo.get().phone);
  const [name, setName] = useState(userInfo.get().name);
  const [email, setEmail] = useState(userInfo.get().email);
  const [coupon, setCoupon] = useState("");
  const [orderSent, setOrderSent] = useState(false);
  const [sendingOrder, setSendingOrder] = useState(false);
  const [readyToSend, setReadyToSend] = useState(false);
  const [errorWhileSendingTicket, setErrorWhileSendingTicket] = useState(false);
  const [error, setError] = useState({ phone: "", name: "", email: "" });
  const [preferenceId, setPreferenceId] = useState("");
  const $ticketItems = useStore(ticketItems);
  const total = Object.values($ticketItems).reduce((acc, item) => acc + item.price * item.quantity, 0);
  const validateFields = () => {
    let newErrors = { phone: "", name: "", email: "" };
    if (name.length < 3) newErrors.name = "El nombre debe tener al menos 3 caracteres";
    if (phone.length < 10) newErrors.phone = "El número de teléfono debe tener al menos 10 caracteres";
    if (email.length < 5) newErrors.email = "El email debe tener al menos 5 caracteres";
    setError(newErrors);
    return Object.values(newErrors).every((err) => !err);
  };
  const sendTicket = async (e) => {
    e.preventDefault();
    if (!validateFields() || Object.keys($ticketItems).length < 1) {
      alert("No hay productos en el ticket");
      return;
    }
    setSendingOrder(true);
    const ticket = Object.values($ticketItems).map((ticketItem) => ({
      id: ticketItem.id,
      quantity: ticketItem.quantity
    }));
    const user = { phone, name, email };
    const data = { items: ticket, phone, name, email, user, coupon, address };
    const response = await sendOrder(data);
    if (response.success) {
      setOrderId(response);
      setPreferenceId(response.id);
      setOrderSent(true);
      Object.values($ticketItems).forEach((ticketItem) => ticketItems.setKey(ticketItem.id, void 0));
    }
    setErrorWhileSendingTicket(!response.success);
    setSendingOrder(false);
  };
  useEffect(() => {
    userInfo.set({ name, email, address, phone });
    if (Object.keys($ticketItems).length > 0 && phone.length > 9 && name.length > 2 && email.length > 5) {
      setReadyToSend(true);
    } else {
      setReadyToSend(false);
    }
  }, [$ticketItems, phone, name, email, address]);
  return {
    orderId,
    address,
    setAddress,
    phone,
    setPhone,
    name,
    setName,
    email,
    setEmail,
    coupon,
    setCoupon,
    orderSent,
    sendingOrder,
    errorWhileSendingTicket,
    error,
    total,
    sendTicket,
    preferenceId
  };
}

const fetchLocation = async (postalCode) => {
  const url = `${SITE_URL}/api/v1/locations/get-postal-address/?postal_code=${postalCode}`;
  const res = await fetch(url);
  const location = await res.json();
  return location;
};

const AddressForm = ({ address, setAddress }) => {
  const [postalCode, setPostalCode] = useState("");
  const [errorNotification, setErrorNotification] = useState("");
  const [neighborhoods, setNeighborhoods] = useState([]);
  function handlePostalCodeChange(event) {
    setPostalCode(event.target.value);
  }
  function handleNeighborhoodChange(event) {
    setAddress({ ...address, neighborhood: event.target.value });
  }
  useEffect(() => {
    if (postalCode.length < 5) return;
    const fetchAddress = async () => {
      try {
        const response = await fetchLocation(postalCode);
        const neighborhoods2 = response.neighborhoods.map((neighborhood) => neighborhood.name);
        setAddress({
          street: "",
          city: "",
          state: response.state,
          county: response.county,
          neighborhood: response.neighborhoods[0].name,
          complement: "",
          postalCode
        });
        setNeighborhoods(neighborhoods2);
        setErrorNotification("");
      } catch (error) {
        setErrorNotification("Error al obtener la dirección");
      }
    };
    fetchAddress();
  }, [postalCode]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-sm mx-auto mb-8", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "website-admin", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Código Postal" }),
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-900 dark:border-gray-600", children: /* @__PURE__ */ jsxs("svg", { className: "w-6 h-6 text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
          /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "website-admin",
            className: "rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "03430",
            onChange: handlePostalCodeChange
          }
        )
      ] })
    ] }),
    address.county && /* @__PURE__ */ jsxs("div", { className: "max-w-sm mx-auto mb-8", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "website-admin", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Alcaldía/Municipio" }),
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-900 dark:border-gray-600", children: /* @__PURE__ */ jsxs("svg", { className: "w-6 h-6 text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
          /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "website-admin",
            className: "rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            value: address.county,
            onChange: handlePostalCodeChange
          }
        )
      ] })
    ] }),
    neighborhoods.length > 0 && /* @__PURE__ */ jsxs("div", { className: "max-w-sm mx-auto mb-8", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "countries", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Selecciona tu colonia" }),
      /* @__PURE__ */ jsx(
        "select",
        {
          id: "countries",
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          onChange: (e) => {
            handleNeighborhoodChange(e);
          },
          children: neighborhoods.map((neighborhood) => /* @__PURE__ */ jsx("option", { value: neighborhood, children: neighborhood }, neighborhood))
        }
      )
    ] }),
    address.state && /* @__PURE__ */ jsxs("div", { className: "max-w-sm mx-auto mb-8", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "website-admin", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Calle y número" }),
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-900 dark:border-gray-600", children: /* @__PURE__ */ jsxs("svg", { className: "w-6 h-6 text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
          /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "website-admin",
            placeholder: "Calle Benito Juárez #1234",
            className: "rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            onChange: (e) => setAddress({ ...address, street: e.target.value })
          }
        )
      ] })
    ] }),
    address.state && /* @__PURE__ */ jsxs("div", { className: "max-w-sm mx-auto mb-8", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "website-admin", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Seña particular" }),
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-900 dark:border-gray-600", children: /* @__PURE__ */ jsxs("svg", { className: "w-6 h-6 text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
          /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "complement",
            placeholder: "Calle Benito Juárez #1234",
            className: "rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            onChange: (e) => setAddress({ ...address, complement: e.target.value })
          }
        )
      ] })
    ] })
  ] });
};

const MERCADO_PAGO_PUBLIC_KEY = "TEST-0ac51a86-8637-4fca-a3a7-31b5279aa034";

const MercadoPagoCheckout = ({ preferenceId }) => {
  useEffect(() => {
    initMercadoPago(MERCADO_PAGO_PUBLIC_KEY);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("h5", { className: "text-gray-900 text-lg font-semibold dark:text-white", children: "Listo para pagar" }),
    /* @__PURE__ */ jsx(
      Wallet,
      {
        initialization: { preferenceId },
        customization: { texts: { valueProp: "smart_option" } }
      }
    )
  ] });
};

function SendTicketForm() {
  const {
    orderId,
    address,
    setAddress,
    phone,
    setPhone,
    name,
    setName,
    email,
    setEmail,
    coupon,
    setCoupon,
    orderSent,
    sendingOrder,
    errorWhileSendingTicket,
    error,
    total,
    sendTicket,
    preferenceId
  } = useSendTicketForm();
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-x-auto shadow-md sm:rounded-lg mb-8", children: [
    errorWhileSendingTicket && /* @__PURE__ */ jsxs("div", { className: "ext-center p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400", role: "alert", children: [
      /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Hubo un problema" }),
      " Por el momento no podemos enviar tu pedido, contactate con nosotros a través de Whatsapp o email."
    ] }),
    orderSent ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(MercadoPagoCheckout, { preferenceId }) }) : /* @__PURE__ */ jsx(
      OrderForm,
      {
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        coupon,
        setCoupon,
        address,
        setAddress,
        error,
        sendingOrder,
        sendTicket
      }
    )
  ] });
}
const OrderForm = ({ name, setName, phone, setPhone, email, setEmail, coupon, setCoupon, address, setAddress, error, sendingOrder, sendTicket }) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "max-w-sm mx-auto", children: [
  /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
    error.name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs italic mb-2", children: error.name }),
    /* @__PURE__ */ jsx("label", { className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Tu nombre / Empresa" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        name: "name",
        onChange: (e) => setName(e.target.value),
        value: name,
        minLength: 3,
        placeholder: "Restaurantes Estrella",
        required: true
      }
    )
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
    error.phone && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs italic mb-2", children: error.phone }),
    /* @__PURE__ */ jsx("label", { htmlFor: "tel", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Tu Whatsapp" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "tel",
        id: "tel",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        placeholder: "55 4647 6943",
        name: "tel",
        value: phone,
        minLength: 10,
        onChange: (e) => setPhone(e.target.value),
        required: true
      }
    )
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
    error.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs italic mb-2", children: error.email }),
    /* @__PURE__ */ jsx("label", { htmlFor: "tel", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Email" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "email",
        id: "email",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        placeholder: "ejemplo@gmail.com",
        name: "email",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        required: true
      }
    )
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "tel", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Cupón" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        id: "coupon",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        name: "coupon",
        value: coupon,
        onChange: (e) => setCoupon(e.target.value),
        required: true
      }
    )
  ] }),
  /* @__PURE__ */ jsx(AddressForm, { address, setAddress }),
  /* @__PURE__ */ jsx(
    "button",
    {
      onClick: sendTicket,
      className: "text-white bg-blue-700 mb-12 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      children: "Crear pedido"
    }
  ),
  sendingOrder && /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { role: "status", children: [
    /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", className: "inline w-8 h-8 text-gray-200 animate-spin dark:text-white fill-blue-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "sr-only text-gray-900 dark:text-white", children: "Enviando..." })
  ] }) })
] }) });

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Compra" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Compra", "description": "Detalles de compra" })} ${renderComponent($$result2, "SendTicketForm", SendTicketForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/ticket/SendTicketForm", "client:component-export": "default" })} ` })}`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/compra/index.astro", void 0);

const $$file = "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/compra/index.astro";
const $$url = "/compra";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
