import {PersonalInfo} from "./components/PersonalInfo/PersonalInfo"
import {Credentials} from "./components/Credentials/Credentials"
import {Address} from "./components/Address/Address"

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
    content: <Address />,
  },
  {
    title: 'Finish',
    content: <Credentials />,
  },
];