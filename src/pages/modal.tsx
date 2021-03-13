import React, { useState } from "react";
import { useModal } from "~/hooks/modal";
import { Page } from "~/layouts/page";

const View: React.VFC = () => {
  useModal();

  const [src, setSrc] = useState("");
  const images = ["boat", "city", "butterfly"];

  const showImage = (image: string) => {
    setSrc(`/${image}.jpg`);
  };

  return (
    <Page title="Modal">
      <h1>Modal</h1>
      {images.map((image) => (
        <button
          key={image}
          type="button"
          className="btn btn-primary me-2 ps-1 pe-3 py-1 rounded-pill"
          data-bs-toggle="modal"
          data-bs-target="#modalImage"
          onClick={() => showImage(image)}
        >
          <img
            src={`/${image}.jpg`}
            width="30"
            height="30"
            className="me-2 rounded-pill"
            alt=""
          />
          <div
            className="position-relative d-inline-block"
            style={{ top: "2px" }}
          >
            {image}
          </div>
        </button>
      ))}
      <div
        id="modalImage"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg text-center">
          <img src={src} className="img-fluid rounded" />
        </div>
      </div>
    </Page>
  );
};

export default View;
