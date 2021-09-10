import React from "react";
import { FormControl, TextField } from "@material-ui/core";
export default function FormItems({
  curView,
  handleOnFormChange,
  errorInfo,
  formInfo,
}) {
  let formItemsInfo = {
    signin: {
      items: [
        {
          label: "email",
          labelFor: "Email",
          id: "signin_email",
          type: "email",
          placeholder: "email",
          props: { "aria-label": "enter your email" },
        },
        {
          label: "password",
          labelFor: "Password",
          id: "signin_password",
          type: "password",
          placeholder: "username",
          props: { "aria-label": "enter your password" },
        },
      ],
    },
    signup: {
      items: [
        {
          label: "username",
          labelFor: "signin_username",
          id: "signin_username",
          type: "text",
          placeholder: "username",
          props: { "aria-label": "enter your username" },
        },
        {
          label: "password",
          labelFor: "signin_password",
          id: "signin_password",
          type: "password",
          placeholder: "username",
          props: { "aria-label": "enter your password" },
        },
        {
          label: "email",
          labelFor: "signin_email",
          id: "signin_email",
          type: "email",
          placeholder: "email",
          props: { "aria-label": "enter your email" },
        },
      ],
    },
    forgotPw: {
      items: [
        {
          label: "email",
          labelFor: "signin_email",
          id: "signin_email",
          type: "email",
          placeholder: "email",
          props: { "aria-label": "enter your email" },
        },
      ],
    },
  };

  const renderFormItems = () => {
    return formItemsInfo[curView].items.map((item, idx) => {
      let errorMsg = errorInfo[curView][item.label];
      return (
        <FormControl key={idx}>
          <TextField
            value={formInfo[curView][item.label]}
            error={errorMsg ? true : false}
            id={item.id}
            label={item.label}
            type={item.type}
            placeholder={item.placeholder}
            inputProps={item.props}
            required={true}
            helperText={
              errorMsg ? errorMsg : `enter your ${item.label.toLowerCase()}`
            }
            autoComplete="true"
            onChange={(e) => {
              handleOnFormChange(item.label, e.currentTarget.value);
            }}
          />
        </FormControl>
      );
    });
  };
  return <>{renderFormItems()}</>;
}
