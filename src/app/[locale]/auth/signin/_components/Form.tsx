"use client";
import FormFields from "@/components/form-fields/form-fields";
import { Button } from "@/components/ui/button";
import { Pages } from "@/constants/enums";
import useFormFields from "@/hooks/useFormField";
import { IFormField } from "@/types/app";
import { Translations } from "@/types/translations";
import React, { useState } from "react";

const Form = ({ translations }: { translations: Translations }) => {
  const { getFormFields } = useFormFields({
    slug: Pages.LOGIN,
    translations: translations,
  });
  const [error, setError] = useState({});

  const onSubmit = () => {
    console.log("gdfg");
  };
  return (
    <form onSubmit={onSubmit}>
      {getFormFields().map((field: IFormField) => (
        <div key={field.name} className="mb-3">
          <FormFields {...field} error={error} />
        </div>
      ))}
      <Button type="submit" className="w-full">
        {translations.auth.login.submit}
      </Button>
    </form>
  );
};

export default Form;
