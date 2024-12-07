import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/MyContext";
import Modal from "../../components/modal/Modal";

function Cart() {
  const context = useContext(MyContext);
  const { mode } = context;

  return (
    <Layout>
      <div
        className="min-h-screen bg-gray-100 pt-5"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h1 className="mb-10 text-center text-xl sm:text-2xl font-bold">
          Cart Items
        </h1>
        <div className="mx-auto max-w-5xl px-4 space-y-6 sm:space-y-0 md:space-x-6 md:flex md:space-y-0 xl:px-0">
          {/* Left Section */}
          <div className="md:w-2/3 space-y-4">
            <div
              className="rounded-lg border bg-white drop-shadow-xl p-4 flex flex-col sm:flex-row sm:justify-start"
              style={{
                backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <img
                src="https://dummyimage.com/400x400"
                alt="product-image"
                className="w-full sm:w-32 md:w-40 rounded-lg object-contain"
              />
              <div className="flex flex-col sm:ml-4 sm:w-full sm:justify-between mt-4 sm:mt-0">
                <div>
                  <h2
                    className="text-lg font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    This is title
                  </h2>
                  <p
                    className="text-sm mt-1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    desc
                  </p>
                  <p
                    className="mt-2 text-xs font-semibold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    ₹100
                  </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="md:w-1/3 rounded-lg border bg-white p-6 shadow-md"
            style={{
              backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <div className="mb-4 flex justify-between">
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Subtotal
              </p>
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                ₹100
              </p>
            </div>
            <div className="flex justify-between">
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Shipping
              </p>
              <p
                className="text-gray-700"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                ₹20
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-4">
              <p
                className="text-lg font-bold"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Total
              </p>
              <p
                className="text-lg font-bold"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                ₹200
              </p>
            </div>
            <Modal/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
