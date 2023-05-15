import {
  WHITE_SPACES_REGEX_PASSWORD,
  EMAIL_REGEX,
  NEW_PASSWORD_REGEX,
  MOBILE_NUMBER_REGEX,
} from "constants/AppConstant";
import * as Yup from "yup";

export const QuotationSchema = Yup.object().shape({
  name: Yup.string().required("Name is mandatory"),
  landmark: Yup.string().required("landmark is mandatory"),
  address: Yup.string().required("address is mandatory"),
  pincode: Yup.string()
    .required("pincode is mandatory")
    .min(6, "PINCODE should be 6 characters long")
    .max(6, "PINCODE should be 6 characters long"),
  state: Yup.string().required("state is mandatory"),
  city: Yup.string().required("city is mandatory"),
  purchaseDate: Yup.string().required("purchase Date is mandatory"),
  productCategory: Yup.string().required("product Category is mandatory"),
  problem: Yup.string().required("problem is mandatory"),
  callType: Yup.string().required("call type is mandatory"),
  productCodeName: Yup.string().required("Prodyct code name is mandatory"),
  dealerName: Yup.string().required("dealer Name is mandatory"),
  subject: Yup.string().required("subject is mandatory"),
  email: Yup.string()
    .required("Email is mandatory")
    .matches(EMAIL_REGEX, "Please enter valid email")
    .min(6, "Email should be 6 to 100 characters long")
    .max(100, "Email should be 6 to 100 characters long"),

  mobileNo: Yup.string()
    .required("Phone number is mandatory")
    .test("check_all_zero", "Phone number is invalid", (val) => +val > 0)
    .matches(MOBILE_NUMBER_REGEX, "Phone number is invalid")
    .max(10, "Phone number should not exceed 10 digits"),
});

// name,
//       email,
//       mobileNo,
//       subject,
//       landmark,
//       address,
//       pincode,
//       state,
//       city,
//       purchaseDate,
//       productCategory,
//       productCodeName,
//       problem,
//       callType,
//       dealerName,
