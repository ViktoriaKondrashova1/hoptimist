import {PersonalInfo} from "./components/PersonalInfo/PersonalInfo"
import {Credentials} from "./components/Credentials/Credentials"
import {Address} from "./components/Address/Address"
import {BillingAddress} from "./components/BillingAddress/BillingAddress"

export const steps = [
  {
    title: 'Personal Info',
    content: <PersonalInfo />,
  },
  {
    title: 'Shipping',
    content: <Address />,
  },
  {
    title: 'Billing',
    content: <BillingAddress />,
  },
  {
    title: 'Finish',
    content: <Credentials />,
  },
];