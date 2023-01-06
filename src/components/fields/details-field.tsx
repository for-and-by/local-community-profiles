import React from "react";
import Textarea from "~/components/inputs/textarea";
import { useController, useFormContext } from "react-hook-form";

export function DetailsField() {
  const { control } = useFormContext();
  const { field, fieldState, formState } = useController({
    name: "description",
    control,
    rules: {
      required: true,
    },
  });

  return <Textarea label="Details" {...field} />;
}
