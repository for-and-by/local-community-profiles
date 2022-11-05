import React from "react";

import { useCreateForm } from "~/contexts/create";

import Drawer from "~/components/composites/drawer";
import Image from "~/components/inputs/image";

export default function ImageStage() {
  const form = useCreateForm();

  const handleUpload = (image: string) => {
    form?.inputs?.update({ image });
  };

  const handleRemove = () => {
    form?.inputs?.update({ image: undefined });
  };

  const handleNextStage = () => {
    if (form.type?.image_required && !form.inputs.values.image)
      form.errors.update({
        image: "We need an image for this type of reports",
      });
    else form.stage.next();
  };

  return (
    <>
      <Drawer.Row className="flex-col p-2">
        <div className="flex w-full flex-col space-y-2">
          <Image
            onUpload={handleUpload}
            onRemove={handleRemove}
            value={form.inputs.values.image}
            error={form.errors.values.image}
            placeholder={
              form.type?.image_required
                ? "Upload a photo (required)"
                : "Upload a photo (optional)"
            }
          />
        </div>
      </Drawer.Row>
      <Drawer.Row className="justify-between p-2">
        <button className="btn btn-light" onClick={() => form.stage.prev()}>
          <p className="btn-text">Go Back</p>
        </button>
        <button className="btn btn-primary" onClick={handleNextStage}>
          <p className="btn-text">Confirm Details</p>
        </button>
      </Drawer.Row>
    </>
  );
}
