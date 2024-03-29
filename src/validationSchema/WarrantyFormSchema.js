import { EMAIL_REGEX, MOBILE_NUMBER_REGEX } from "constants/AppConstant";
import * as Yup from "yup";

export const WarrantyFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is mandatory"),
  email: Yup.string()
    .required("Email is mandatory")
    .matches(EMAIL_REGEX, "Please enter valid email")
    .min(6, "Email should be 6 to 100 characters long")
    .max(100, "Email should be 6 to 100 characters long"),

  mobileNo: Yup.string()
    .required("Phone number is mandatory")
    .test("check_all_zero", "Phone number is invalid", (val) => +val > 0)
    .max(11, "Phone number should not exceed 10 digits")
    .matches(MOBILE_NUMBER_REGEX, "Phone number is invalid"),

});
