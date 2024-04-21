import React from "react";
import { useController, useFormContext } from "react-hook-form";

import { useFilterSeverities } from "~/hooks/filter/use-filter-severities";

import Select from "~/components/inputs/select";

export default function SeverityField() {
  const [severities] = useFilterSeverities();

  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name: "severity",
    control,
    rules: {
      required: "An importance is required",
    },
  });

  return (
    <Select
      label="Importance"
      options={severities?.map((result) => ({
        label: result.title,
        value: result.handle,
      }))}
      error={error}
      {...field}
    />
  );
}
