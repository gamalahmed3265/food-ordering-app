"use client";

import { InputTypes, Routes } from "@/constants/enums";
import useFormFields from "@/hooks/useFormField";
import { IFormField } from "@/types/app";
import { Translations } from "@/types/translations";
import { CameraIcon } from "lucide-react";
import { Session } from "next-auth";
import FormFields from "../form-fields/form-fields";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { UserRole } from "@prisma/client";
import Checkbox from "../form-fields/checkbox";
import { useActionState } from "react";
import { updateProfile } from "./_actions/profile";
import { ValidationErrors } from "@/validations/auth";
import Loader from "../ui/loader";

function EditUserForm({
  translations,
  user,
}: {
  translations: Translations;
  user: Session["user"];
}) {
  const formData = new FormData();
  const initialState: {
    message?: string;
    error?: ValidationErrors;
    status?: number | null;
    formData?: FormData | null;
  } = {
    message: "",
    error: {},
    status: null,
    formData,
  };
  const session = useSession();
  const [state, action, pending] = useActionState(updateProfile, initialState);
  const { getFormFields } = useFormFields({
    slug: Routes.PROFILE,
    translations: translations,
  });
  // console.log(user);
  // console.log(session);
  console.log(state);

  return (
    <form className="flex flex-col md:flex-row gap-10" action={action}>
      <div className="group relative w-[200px] h-[200px] overflow-hidden rounded-full mx-auto">
        <div
          className={`${
            // selectedImage
            //   ?
            "group-hover:opacity-[1] opacity-0o  transition-opacity duration-200"
            //   : ""
          } absolute top-0  left-0  w-full h-full bg-gray-50/40`}
        >
          <UploadImage />
        </div>
      </div>
      <div className="flex-1">
        {getFormFields().map((field: IFormField) => (
          <div key={field.name} className="mb-3">
            <FormFields
              {...field}
              defaultValue={user[field.name]}
              error={state?.error}
              readOnly={field.type === InputTypes.EMAIL}
            />
          </div>
        ))}
        {session.data?.user.role === UserRole.USER && (
          <div className="flex items-center gap-2 my-2">
            <Checkbox
              label="Admin"
              name="admin"
              checked={true}
              onClick={() => {
                console.log("admin");
              }}
            />
          </div>
        )}
        <Button type="submit" className="w-full">
          {pending ? <Loader /> : translations.save}
        </Button>
      </div>
    </form>
  );
}

export default EditUserForm;

const UploadImage = () => {
  const uploadImage = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="image-upload"
        name="image"
        onChange={uploadImage}
      />
      <label
        htmlFor="image-upload"
        className="border rounded-full w-[200px] h-[200px] element-center cursor-pointer"
      >
        <CameraIcon className="!w-8 !h-8 text-accent" />
      </label>
    </>
  );
};
