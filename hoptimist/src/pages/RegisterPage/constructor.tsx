import {PersonalInfo} from "./components/PersonalInfo/PersonalInfo"
import {Credentials} from "./components/Credentials/Credentials"

export const steps = [
  {
    title: 'Personal Info',
    content: <PersonalInfo />,
  },
  {
    title: 'Shipping',
    content: 'Second-content',
  },
  {
    title: 'Billing',
    content: 'Last-content',
  },
  {
    title: 'Finish',
    content: <Credentials />,
  },
];