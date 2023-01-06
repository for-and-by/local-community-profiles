import React from "react";
import { Select } from "~/components/inputs/select";
import { useFilterSeverities } from "~/hooks/filter/use-filter-severities";
import { useFormContext } from "react-hook-form";

export function SeverityField() {
  const { register } = useFormContext();
  const { severities, isLoading } = useFilterSeverities();

  if ((!severities || severities.length === 0) && !isLoading) return null;

  return (
    <Select
      label="Severity"
      placeholder="Loading severities..."
      options={severities?.map((result) => ({
        label: result.title,
        value: result.handle,
      }))}
      loading={isLoading}
      {...register("severity", { required: true })}
    />
  );
}