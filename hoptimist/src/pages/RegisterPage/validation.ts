import type { Rule } from 'antd/es/form'

export const firstNameValidationRules: Rule[] = [
  { required: true, message: 'Please input your first name', whitespace: true },
  { min: 2, message: 'First name must be at least 2 characters long', whitespace: true },
]

export const lastNameValidationRules: Rule[] = [
  { required: true, message: 'Please input your last name', whitespace: true },
  { min: 2, message: 'Last name must be at least 2 characters long', whitespace: true },
]

export const countryValidationRules: Rule[] = [
  { required: true, message: 'Please select country', whitespace: true },
]

export const cityValidationRules: Rule[] = [
  { required: true, message: 'Please input city', whitespace: true },
]

export const streetValidationRules: Rule[] = [
  { required: true, message: 'Please input street', whitespace: true },
]

export const postalValidationRules: Rule[] = [
  { required: true, message: 'Please input postal code', whitespace: true },
]