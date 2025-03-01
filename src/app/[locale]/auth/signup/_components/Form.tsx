"use client";
import FormFields from "@/components/form-fields/form-fields";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Pages, Routes } from "@/constants/enums";
import useFormFields from "@/hooks/useFormField";
import { signUp } from "@/server/_action/auth";
import { IFormField } from "@/types/app";
import { Translations } from "@/types/translations";
import { ValidationErrors } from "@/validations/auth";
import { useParams, useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";

const initialState: {
  message?: string;
  error?: ValidationErrors;
  status?: number | null;
  formData?: FormData | null;
} = {
  message: "",
  error: {},
  status: null,
  formData: null,
};

const Form = ({ translations }: { translations: Translations }) => {
  const { locale } = useParams();
  const route = useRouter();
  const [state, action, pending] = useActionState(signUp, initialState);
  const { getFormFields } = useFormFields({
    slug: Pages.Register,
    translations: translations,
  });

  useEffect(() => {
    if (state.status && state.message) {
      toast(state.message);
    }
    if (state.status == 201) {
      route.replace(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`);
    }
  }, [locale, route, state.message, state.status]);
  return (
    <form action={action}>
      {getFormFields().map((field: IFormField) => {
        const fieldValue = state.formData?.get(field.name) as string;
        return (
          <div key={field.name} className="mb-3">
            <FormFields
              {...field}
              error={state.error}
              defaultValue={fieldValue}
            />
          </div>
        );
      })}
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? <Loader /> : translations.auth.login.submit}
      </Button>
    </form>
  );
};

export default Form;
